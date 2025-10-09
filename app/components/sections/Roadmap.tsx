'use client';

import { roadmap } from '@/constants';
import { useTranslations } from 'next-intl';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { RoadmapCard, RoadmapCardMobile } from '../roadmap';

const Roadmap = () => {
  const t = useTranslations();
  const shipRef = useRef<HTMLDivElement>(null);
  const shipMobileRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLElement>(null);
  const [isShipVisible, setIsShipVisible] = useState(false);

  const processedRoadmap = useMemo(() => {
    const result = [...roadmap];

    for (let i = 0; i < result.length; i += 2) {
      if (i + 1 < result.length && !isPairEven(i)) {
        [result[i], result[i + 1]] = [result[i + 1]!, result[i]!];
      }
    }

    return result;
  }, []);

  function isPairEven(num: number): boolean {
    return Math.floor(num / 2) % 2 === 0;
  }

  useEffect(() => {
    if (!roadmapRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsShipVisible(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    observer.observe(roadmapRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="roadmap" ref={roadmapRef} className="roadmap">
      <div className="container">
        <div className="title">{t('roadmap.title')}</div>

        {/* Desktop Roadmap */}
        <div className="roadmap-wrapper">
          {roadmap.map((item, i) => (
            <RoadmapCard
              key={i}
              item={item}
              index={i}
              t={t}
              isShipVisible={isShipVisible}
              shipRef={shipRef}
            />
          ))}
        </div>

        {/* Mobile Roadmap */}
        <div className="roadmap-mobile">
          {processedRoadmap.map((item, i) => (
            <RoadmapCardMobile
              key={i}
              item={item}
              index={i}
              t={t}
              isShipVisible={isShipVisible}
              isPairEven={isPairEven(i)}
              shipMobileRef={shipMobileRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
