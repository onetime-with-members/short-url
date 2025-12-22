'use client';

import { fetchOriginalUrl } from '@/lib/api';
import { SHORT_URL_DOMAIN, SITE_DOMAIN } from '@/lib/constants';
import { foundExampleEvent } from '@/utils';
import { useParams, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Redirect() {
  const params = useParams<{ shortId: string }>();
  const pathname = usePathname();

  useEffect(() => {
    (async () => {
      const defaultUrl = `${SITE_DOMAIN}${pathname}`;
      const shouldFetchOriginalUrl =
        params.shortId && !foundExampleEvent(params.shortId);

      window.location.href = shouldFetchOriginalUrl
        ? ((await fetchOriginalUrl(`${SHORT_URL_DOMAIN}${pathname}`)) ??
          defaultUrl)
        : defaultUrl;
    })();
  }, [pathname]);

  return null;
}
