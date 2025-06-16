'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';

export default function ClientWrapper({ children }) {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 6100); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loadingComplete && <LoadingScreen onComplete={() => setLoadingComplete(true)} />}
      {loadingComplete && children}
    </>
  );
}
