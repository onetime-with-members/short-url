'use client';

import { fetchOriginalUrl } from '@/lib/api';
import { SHORT_URL_DOMAIN, SITE_DOMAIN } from '@/lib/constants';
import { useParams, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Redirect() {
  const params = useParams<{ shortId: string }>();
  const pathname = usePathname();

  useEffect(() => {
    async function redirectToOriginalUrl() {
      if (!params.shortId) {
        window.location.href = `${SITE_DOMAIN}${pathname}`;
        return;
      }
      const originalUrl = await fetchOriginalUrl(
        `${SHORT_URL_DOMAIN}${pathname}`,
      );
      window.location.href = originalUrl || `${SITE_DOMAIN}${pathname}`;
    }
    redirectToOriginalUrl();
  }, [pathname]);

  return null;
}
