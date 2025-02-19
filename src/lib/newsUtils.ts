import locales from '$i18n/locales';
import type Locale from '$types/Locale';
import { getCollection, type CollectionEntry } from 'astro:content';
import { correctLocaleCasing } from './correctLocaleCasing';

export async function getMostRecentNewsItem(locale: Locale) {
  const allNews = await getCollection('news');
  const allNewsInLocale = allNews.filter((item) => isNewsItemInLocale(item, locale));
  const someNewsItem = allNewsInLocale.at(0);
  if (!someNewsItem) {
    return null;
  }
  return allNewsInLocale.reduce((prev, curr) => (isBefore(prev, curr) ? curr : prev), someNewsItem);
}

export function getLocale(newsItem: CollectionEntry<'news'>) {
  const srcPath = newsItem.id;
  const localeInUnknownCase = srcPath.slice(0, srcPath.indexOf('/'));
  return correctLocaleCasing(localeInUnknownCase);
}

export function getHref(newsItem: CollectionEntry<'news'>) {
  const locale = getLocale(newsItem);
  return `/${locale}/news/${getSlug(newsItem)}`;
}

export function getSlug(newsItem: CollectionEntry<'news'>) {
  const toLowerCase = (s: string) => s.toLowerCase();
  const matchLocales = new RegExp(`(${locales.map(toLowerCase).join('|')})/`);
  return newsItem.id.replace(matchLocales, '');
}

export function isNewsItemInLocale(newsItem: CollectionEntry<'news'>, locale: Locale) {
  const newsItemLocale = getLocale(newsItem);
  return newsItemLocale === locale;
}

export function isBefore(item1: CollectionEntry<'news'>, item2: CollectionEntry<'news'>) {
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
  const matchDate = new RegExp(`(${locales.join('|')})/(\\d\\d\\d\\d-\\d\\d-\\d\\d)`, 'i');
  const date = newsItem.id.match(matchDate)?.[2];
  return date ? new Date(date) : null;
}
