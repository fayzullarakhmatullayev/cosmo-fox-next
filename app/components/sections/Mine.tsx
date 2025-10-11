"use client";

import { MINES } from "@/constants";
import { useTranslations } from "next-intl";
import { SwiperCarousel } from "../";
import MineCard from "../mine/MineCard";

const Mine = () => {
  const t = useTranslations();

  return (
    <section id="mine" className="mine">
      <h2 className="title">{t("nav.mine")}!</h2>
      <div className="mine__wrapper">
        {MINES.map((mine, i) => (
          <MineCard key={i} mine={mine} className={`mine__card--${i + 1} ${i % 2 === 0 ? "on-top" : "on-bottom"}`} />
        ))}
      </div>
      <div className="mine__swiper">
        <SwiperCarousel
          items={MINES}
          renderItem={(item, i) => <MineCard key={i} mine={item} className={`mine__card--${i + 1} on-top`} />}
        />
      </div>
    </section>
  );
};

export default Mine;
