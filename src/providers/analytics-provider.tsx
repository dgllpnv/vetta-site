'use client';

import { useAnalytics } from '@/hooks/useAnalytics';

// Componente interno que usa o hook
function AnalyticsTracker() {
  useAnalytics();
  return null;
}

// Provider wrapper
export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnalyticsTracker />
      {children}
    </>
  );
}
