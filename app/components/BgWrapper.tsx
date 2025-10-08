'use client';

import Image from 'next/image';
import React from 'react';

const BgWrapper = () => {
  return (
    <div className="bg-wrapper">
      <div className="bg-desktop">
        <Image
          src="/images/all-bg.jpg"
          alt="bg"
          className="bg-img bg-all"
          width={1920}
          height={1080}
        />
      </div>
      <div className="bg-mopbile">
        <Image
          src="/images/all-bg-mobile.jpg"
          alt="bg"
          className="bg-img bg-all"
          width={440}
          height={956}
        />
      </div>
    </div>
  );
};

export default BgWrapper;
