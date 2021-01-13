/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';
import Router from 'next/router';

const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(() => true);
  }, []);

  return isMounted;
};

const useWindowLocation = () => {
  const isSSR = typeof window === 'undefined';
  const isMounted = useIsMounted();
  const [location, setLocation] = useState(!isSSR && isMounted ? window.location : undefined);

  useEffect(() => {
    if (!isSSR && isMounted) return;

    const setWindowLocation = () => {
      setLocation({ ...window.location });
    };

    if (!location) {
      setWindowLocation();
    }

    window.addEventListener('popstate', setWindowLocation);
    Router.events.on('routeChangeComplete', setWindowLocation);

    return () => {
      window.removeEventListener('popstate', setWindowLocation);
    };
  }, [location, isMounted]);

  return location;
};

export default useWindowLocation;
