'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { YoutubeDialog } from '../';

const About = () => {
  const t = useTranslations();
  const [isDialogVisible, setisDialogVisible] = useState(false);

  const lists = ['about.list1', 'about.list2', 'about.list3', 'about.list4'];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__left">
            <Image
              src="/images/about/about-img.png"
              alt="about"
              className="about__img--desktop"
              width={500}
              height={500}
            />
            <Image
              src="/images/about/about-img-mobile.png"
              alt="about"
              className="about__img--mobile"
              width={500}
              height={500}
            />
          </div>
          <div className="about__right">
            <h2 className="about__title">
              <span>{t('about.title')}</span>
              <Image src="/images/about/about-line.png" alt="about-line" width={100} height={100} />
            </h2>
            <ul className="about__list">
              {lists.map((list) => (
                <li key={list}>{t(list)}</li>
              ))}
            </ul>
            {/* <div className="about__footer" onClick={() => setisDialogVisible(true)}>
              <button className="about__play">
                <Image src="/images/about/play.png" alt="play" width={100} height={100} />
              </button>
              <p>{t('about.watch')}</p>
            </div> */}
          </div>
        </div>

        {isDialogVisible && <YoutubeDialog onClose={() => setisDialogVisible(false)} />}
      </div>
    </section>
  );
};

export default About;
