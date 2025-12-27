import { fetchEvent, fetchOriginalUrl } from '@/lib/api';
import {
  defaultMetadata,
  SHORT_URL_DOMAIN,
  SITE_DOMAIN,
} from '@/lib/constants';
import Redirect from '@/components/Redirect';
import { foundExampleEvent, generateEventMetadata } from '@/utils';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ shortId: string }>;
}) {
  const { shortId } = await params;

  const exampleEvent = foundExampleEvent(shortId);
  if (exampleEvent) {
    return generateEventMetadata({
      title: exampleEvent.title,
      url: `${SITE_DOMAIN}/events/view/${shortId}`,
    });
  }

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

  return generateEventMetadata({
    title: event.title,
    url: originalUrl,
  });
}

export default function Page() {
  return <Redirect />;
}
