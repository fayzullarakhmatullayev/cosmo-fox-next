'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

type Props = {
  card: {
    image: string;
    text: string;
  };
};

const TokenCard = ({ card }: Props) => {
  const t = useTranslations();
  return (
    <div className="token__card">
      <div className="token__card--content">
        <Image
          src={card.image}
          alt="token-card"
          width={138}
          height={138}
          className="token__card--image"
        />
        <h2 className="token__card--text">{t(card.text)}</h2>
      </div>
      <Image
        className="token__card--bg"
        src="/images/token/token-slot.png"
        alt="token"
        width={100}
        height={100}
      />
    </div>
  );
};

export default TokenCard;
