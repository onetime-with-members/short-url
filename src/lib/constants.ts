import { Metadata } from 'next';

export const SERVER_API_URL = process.env.NEXT_PUBLIC_SERVER_API_URL;
export const SITE_DOMAIN = process.env.NEXT_PUBLIC_SITE_DOMAIN;
export const SHORT_URL_DOMAIN = process.env.NEXT_PUBLIC_SHORT_URL_DOMAIN;

export const defaultMetadata = {
  metadataBase: new URL(SHORT_URL_DOMAIN as string),
  title: 'OneTime',
  openGraph: {
    title: 'OneTime',
    description: '링크 공유 한번으로, 여러 사람과 쉽게 일정을 맞추세요.',
    images: '/images/opengraph-thumbnail.png',
    siteName: 'OneTime',
  },
  twitter: {
    title: 'OneTime',
    description:
      '일정을 쉽고 빠르게. 원타임과 함께 링크 공유 한 번으로, 여러 사람과 쉽게 일정을 맞추세요.',
  },
} as const satisfies Metadata;
