'use client';

import { useConnectionSpeed } from '@/app/hooks/useConnectionSpeed';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import UiButton from '../UiButton';

const Home = () => {
  const t = useTranslations();
  const { isSlowConnection } = useConnectionSpeed();

  const [isMounted, setIsMounted] = useState(false);

  const lists = ['home.list1', 'home.list2', 'home.list3'];

  const isIOS = useMemo(() => {
    if (typeof navigator === 'undefined') {
      return false;
    }

    return (
      /iPad|iPhone|iPod/.test((navigator as Window['navigator']).userAgent) &&
      !(window as any).MSStream
    );
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="home" className={`home hero ${!isSlowConnection ? 'fast' : ''}`}>
      <div className="container">
        <div className="home__wrapper">
          <div className="home__video">
            {isMounted && (
              <>
                {isIOS ? (
                  <Image
                    src="/images/title-fallback.png"
                    alt="Video fallback"
                    width={500}
                    height={500}
                  />
                ) : (
                  <video autoPlay loop muted playsInline preload="auto" src="/videos/title.mp4">
                    <source src="/videos/title.mp4" type="video/mp4" />
                  </video>
                )}
              </>
            )}
          </div>
          <div className="home__content">
            <h1 className="home__title">{t('home.title')}</h1>
            <ul className="home__list">
              {lists.map((list, index) => (
                <li key={index}>{t(list)}</li>
              ))}
            </ul>
            <UiButton
              className="home__button"
              variant="large"
              target="_blank"
              href={process.env.NEXT_PUBLIC_PLAY_URL}
            >
              {t('play')}
            </UiButton>
          </div>
        </div>
      </div>
      {isSlowConnection ? (
        <Image className="bg-img" src="/images/home-bg.jpg" alt="bg" width={1920} height={1080} />
      ) : (
        <video
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="metadata"
          src="/videos/fox_pilot.mp4"
          className="bg-img"
        ></video>
      )}
    </section>
  );
};

export default Home;
