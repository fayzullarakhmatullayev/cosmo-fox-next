'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import MineCard from '../mine/MineCard';
import SwiperCarousel from '../SwiperContainer';

const Mine = () => {
  const t = useTranslations();

  const mines = [
    {
      image: '/images/mine/mine-1.png',
      title: 'mine1.title',
      text: ['mine1.text1', 'mine1.text2'],
      slot: '/images/mine/mine-slot-1.png',
      imageSize: 225,
      top: 13
    },
    {
      image: '/images/mine/mine-2.png',
      title: 'mine2.title',
      text: ['mine2.text1', 'mine2.text2'],
      slot: '/images/mine/mine-slot-2.png',
      imageSize: 225,
      top: 50
    },
    {
      image: '/images/mine/mine-3.png',
      title: 'mine3.title',
      text: ['mine3.text1', 'mine3.text2'],
      slot: '/images/mine/mine-slot-4.png',
      imageSize: 207,
      top: 32
    },
    {
      image: '/images/mine/mine-4.png',
      title: 'mine4.title',
      text: ['mine4.text1', 'mine4.text2'],
      slot: '/images/mine/mine-slot-3.png',
      imageSize: 207,
      top: 68
    }
  ];

  return (
    <section id="mine" className="mine">
      <h2 className="title">{t('nav.mine')}!</h2>
      <div className="mine__wrapper">
        {mines.map((mine, i) => (
          <MineCard
            key={i}
            mine={mine}
            className={`mine__card--${i + 1} ${i % 2 === 0 ? 'on-top' : 'on-bottom'}`}
          />
        ))}
      </div>
      <div className="mine__swiper">
        <SwiperCarousel
          items={mines}
          renderItem={(item, i) => (
            <MineCard key={i} mine={item} className={`mine__card--${i + 1} on-top`} />
          )}
        />
      </div>
    </section>
  );
};

export default Mine;
