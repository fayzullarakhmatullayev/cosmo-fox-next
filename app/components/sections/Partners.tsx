'use client';

import { partnerLinks, partners } from '@/constants';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import { LinkWhiteIcon } from '../icons';

const Partners = () => {
  const t = useTranslations();
  return (
    <section id="partners" className="partners">
      <h2 className="title">{t('parthers_title')}</h2>
      <div className="partners__wrapper">
        {partners.map((card, i) => (
          <a href={card.link} key={i} className="partners__card" target="_blank">
            <Image
              src={card.image}
              alt="partner"
              width={100}
              height={100}
              className="partners__card--image"
              style={{ height: `${card.height}px` }}
            />
            <Image
              src="/images/partners/partner-slot.png"
              alt="partners-slot"
              width={100}
              height={100}
              className="partners__card--slot"
            />
          </a>
        ))}
      </div>
      <div className="partners__links">
        {partnerLinks.map((item, i) => (
          <a key={i} href={item.link} target="_blank">
            <span>{item.title}</span> <LinkWhiteIcon />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Partners;
