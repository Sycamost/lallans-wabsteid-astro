import rss, { RSSFeedItem } from '@astrojs/rss';
import { CollectionEntry, getCollection } from 'astro:content';
import { getDate, getHref, isNewsItemInLocale } from '$lib/newsUtils';
import localeStaticPaths from '$lib/localeStaticPaths';
import getLocaleFromPath from '$lib/getLocaleFromPath';
import type { APIContext } from 'astro';
import translate from '$i18n/translate';
import tFeed from '$i18n/translations/pages/rss.xml';
import type LallansIssue from '$types/LallansIssue';
import type Locale from '$types/Locale';
import { getAllLallansIssues } from '$data/lallans';
import type Scotsoun from '$types/Scotsoun';
import { getAllScotsoun } from '$data/scotsoun';

export async function get(context: APIContext) {
  const locale = getLocaleFromPath(context.url.pathname);
  const t = translate(locale);
  const site = context.site;
  if (!site) {
    throw new Error('No site provided in Astro configuration');
  }

  const news = (await getCollection('news')).filter((item) => isNewsItemInLocale(item, locale));
  const lallans = await getAllLallansIssues();
  const scotsoun = await getAllScotsoun();

  return rss({
    title: t(tFeed, { key: 'title' }),
    description: t(tFeed, { key: 'description' }),
    site,
    items: [
      ...news.map(newsItemToRssFeedItem),
      ...lallans.map(lallansIssueToRssFeedItem(locale)),
      ...scotsoun.map(scotsounReleaseToRssFeedItem(locale)),
    ],
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

function lallansIssueToRssFeedItem(locale: Locale) {
  return function (issue: LallansIssue): RSSFeedItem {
    return {
      link: `/${locale}/furthsettins/lallans/${issue.issueNumber}`,
      title: issue.issueName,
      description: issue.description[locale],
      pubDate: new Date(issue.uploadDate),
    };
  };
}

function scotsounReleaseToRssFeedItem(locale: Locale) {
  return function (release: Scotsoun): RSSFeedItem {
    return {
      link: `/${locale}/furthsettins/scotsoun/${release.scotsounId}`,
      title: release.title,
      description: release.description?.[locale] ?? release.longName,
      pubDate: new Date(release.uploadDate),
    };
  };
}

export async function getStaticPaths() {
  return localeStaticPaths;
}
