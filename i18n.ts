import {getRequestConfig} from 'next-intl/server';

export const locales = ['de', 'en'] as const;
export const defaultLocale = 'de';

export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({locale}) => {
  const resolvedLocale = (locale && locales.includes(locale as typeof locales[number]))
    ? (locale as typeof locales[number])
    : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`./messages/${resolvedLocale}.json`)).default
  };
});