import { exampleEventList } from '@/data/example-events';
import { defaultMetadata } from '@/lib/constants';

export function generateEventMetadata({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  return {
    ...defaultMetadata,
    title: `${title || '이벤트'} | OneTime`,
    openGraph: {
      title: `${title || '이벤트'} | OneTime`,
      description:
        '링크로 접속해 자신의 스케줄을 등록하고 모두가 맞는 시간을 찾으세요.',
      images: '/images/opengraph-thumbnail.png',
      siteName: 'OneTime',
      url,
    },
  };
}

export function foundExampleEvent(eventId: string) {
  return exampleEventList.find(({ slug }) => eventId === slug);
}
