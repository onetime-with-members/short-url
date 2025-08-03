import { fetchEvent, fetchOriginalUrl } from '@/lib/api';
import { defaultMetadata, SHORT_URL_DOMAIN } from '@/lib/constants';
import Redirect from '@/components/redirect';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ shortId: string }>;
}) {
  const { shortId } = await params;

  const originalUrl = await fetchOriginalUrl(`${SHORT_URL_DOMAIN}/${shortId}`);
  if (!originalUrl) {
    return defaultMetadata;
  }

  const eventId = originalUrl.split('/').pop();
  if (!eventId) {
    return defaultMetadata;
  }

  const event = await fetchEvent(eventId);
  if (!event) {
    return defaultMetadata;
  }

  return {
    ...defaultMetadata,
    title: `${event.title || '이벤트'} | OneTime`,
    openGraph: {
      title: `${event.title || '이벤트'} | OneTime`,
      description:
        '링크로 접속해 자신의 스케줄을 등록하고 모두가 맞는 시간을 찾으세요.',
      images: ['/images/opengraph/opengraph-thumbnail.png'],
      siteName: 'OneTime',
      url: originalUrl,
    },
  };
}

export default function Page() {
  return <Redirect />;
}
