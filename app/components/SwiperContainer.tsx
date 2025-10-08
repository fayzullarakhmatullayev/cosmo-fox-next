'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { NextIcon, PrevIcon } from './icons';

interface SwiperCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

export default function SwiperCarousel<T>({ items, renderItem }: SwiperCarouselProps<T>) {
  return (
    <div className="swiper__container">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 0
          }
        }}
        loop={true}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>{renderItem(item, i)}</SwiperSlide>
        ))}

        <div className="swiper-pagination"></div>

        <div className="swiper-button-prev">
          <PrevIcon />
        </div>

        <div className="swiper-button-next">
          <NextIcon />
        </div>
      </Swiper>
    </div>
  );
}
