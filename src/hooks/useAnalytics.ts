'use client';

import { useEffect, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';

// Gerar ID de sessão único
function generateSessionId(): string {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 15);
  return `${timestamp}-${randomPart}`;
}

// Obter ou criar sessionId
function getSessionId(): string {
  if (typeof window === 'undefined') return '';

  let sessionId = sessionStorage.getItem('auri_session_id');
  if (!sessionId) {
    sessionId = generateSessionId();
    sessionStorage.setItem('auri_session_id', sessionId);
  }
  return sessionId;
}

// Enviar dados para a API
async function sendAnalytics(data: Record<string, unknown>): Promise<void> {
  try {
    await fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch (error) {
    // Silently fail - não queremos afetar UX
    console.debug('Analytics error:', error);
  }
}

// Hook principal de analytics
export function useAnalytics() {
  const pathname = usePathname();
  const lastTrackedPage = useRef<string>('');

  // Track page view
  useEffect(() => {
    // Evitar duplicatas
    if (pathname === lastTrackedPage.current) return;
    lastTrackedPage.current = pathname;

    const sessionId = getSessionId();
    if (!sessionId) return;

    sendAnalytics({
      type: 'pageview',
      sessionId,
      page: pathname,
      referrer: typeof document !== 'undefined' ? document.referrer : null,
    });
  }, [pathname]);

  // Track custom events
  const trackEvent = useCallback((name: string, data?: Record<string, unknown>) => {
    const sessionId = getSessionId();
    if (!sessionId) return;

    sendAnalytics({
      type: 'event',
      sessionId,
      page: pathname,
      name,
      data,
    });
  }, [pathname]);

  return { trackEvent };
}

// Hook para tracking de cliques em produtos
export function useProductTracking() {
  const { trackEvent } = useAnalytics();

  const trackProductClick = useCallback((productId: string, productName: string) => {
    trackEvent('product_click', { productId, productName });
  }, [trackEvent]);

  const trackCtaClick = useCallback((buttonText: string, destination?: string) => {
    trackEvent('cta_click', { buttonText, destination });
  }, [trackEvent]);

  return { trackProductClick, trackCtaClick };
}

// Hook para tracking do formulário
export function useFormTracking() {
  const { trackEvent } = useAnalytics();

  const trackFormStart = useCallback((formName: string) => {
    trackEvent('form_start', { formName });
  }, [trackEvent]);

  const trackFormSubmit = useCallback((formName: string, success: boolean) => {
    trackEvent('form_submit', { formName, success });
  }, [trackEvent]);

  const trackFormError = useCallback((formName: string, errorField: string) => {
    trackEvent('form_error', { formName, errorField });
  }, [trackEvent]);

  return { trackFormStart, trackFormSubmit, trackFormError };
}
