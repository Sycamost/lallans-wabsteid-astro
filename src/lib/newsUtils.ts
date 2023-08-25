import type Locale from '$types/Locale';
import { CollectionEntry, getCollection } from 'astro:content';

export async function getMostRecentNewsItem(locale: Locale) {
  const allNews = await getCollection('news');
  const allNewsInLocale = allNews.filter((item) => isNewsItemInLocale(item, locale));
  const someNewsItem = allNewsInLocale.at(0);
  if (!someNewsItem) {
    return null;
  }
  return allNewsInLocale.reduce((prev, curr) => (isBefore(curr, prev) ? curr : prev), someNewsItem);
}

export function getLocale(newsItem: CollectionEntry<'news'>) {
  const srcPath = newsItem.id;
  return srcPath.slice(0, srcPath.indexOf('/'));
}

export function getHref(newsItem: CollectionEntry<'news'>) {
  const locale = getLocale(newsItem);
  return `/${locale}/news/${newsItem.slug.replace('/', '-')}`;
}

export function isNewsItemInLocale(newsItem: CollectionEntry<'news'>, locale: Locale) {
  const newsItemLocale = getLocale(newsItem);
  return newsItemLocale === locale;
}

function isBefore(item1: CollectionEntry<'news'>, item2: CollectionEntry<'news'>) {
  const date1 = getDate(item1);
  const date2 = getDate(item2);
  if (!date2) {
    return false;
  }
  if (!date1) {
    return true;
  }
  return date1.valueOf() < date2.valueOf();
}

export function getDate(newsItem: CollectionEntry<'news'>) {
  const match = newsItem.id.match(/(?<=(en-GB|sco))\/(\d\d\d\d-\d\d-\d\d)/)?.[2];
  return match ? new Date(match) : null;
}
