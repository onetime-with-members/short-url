import { SERVER_API_URL } from './constants';
import { EventType } from './types';

export async function fetchOriginalUrl(shortUrl: string) {
  const res = await fetch(`${SERVER_API_URL}/urls/action-original`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      shorten_url: shortUrl,
    }),
  });

  if (!res.ok) return null;

  const data = await res.json();
  const originalUrl: string = data.payload.original_url;

  return originalUrl;
}

export async function fetchEvent(eventId: string) {
  const res = await fetch(`${SERVER_API_URL}/events/${eventId}`);

  if (!res.ok) return null;

  const data = await res.json();
  const event: EventType = data.payload;

  return event;
}
