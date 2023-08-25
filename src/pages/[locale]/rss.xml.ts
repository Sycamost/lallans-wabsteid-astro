import rss, { RSSFeedItem } from '@astrojs/rss';
import { CollectionEntry, getCollection } from 'astro:content';
import { getDate, getHref, isNewsItemInLocale } from '$lib/newsUtils';
import localeStaticPaths from '$lib/localeStaticPaths';
import getLocaleFromPath from '$lib/getLocaleFromPath';
import type { APIContext } from 'astro';
import translate from '$i18n/translate';
import tFeed from '$i18n/translations/pages/rss.xml';

export async function get(context: APIContext) {
  const locale = getLocaleFromPath(context.url.pathname);
  const t = translate(locale);
  const news = (await getCollection('news')).filter((item) => isNewsItemInLocale(item, locale));
  const site = context.site;
  if (!site) {
    throw new Error('No site provided in Astro configuration');
  }

  return rss({
    title: t(tFeed, { key: 'title' }),
    description: t(tFeed, { key: 'description' }),
    site,
    items: news.map(newsItemToRssFeedItem),
    customData: `<language>${locale}</language>`,
  });
}

function newsItemToRssFeedItem(item: CollectionEntry<'news'>): RSSFeedItem {
  const pubDate = getDate(item);
  if (!pubDate) {
    throw new Error(`Could not determine publication date of ${item}`);
  }

  return {
    link: getHref(item),
    title: item.data.title,
    description: item.data.summary,
    pubDate,
  };
}

export async function getStaticPaths() {
  return localeStaticPaths;
}
