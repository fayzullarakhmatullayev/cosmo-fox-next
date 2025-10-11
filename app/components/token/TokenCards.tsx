"use client";

import { TOKEN_CARDS } from "@/constants";
import { useTranslations } from "next-intl";

import { SwiperCarousel, UiButton } from "../";
import { LinkIcon } from "../../assets/icons";
import TokenCard from "./TokenCard";

const TokenCards = () => {
  const t = useTranslations();
  return (
    <div className="token">
      <h2 className="title">{t("token_zylo")}</h2>
      <div className="token__wrapper">
        {TOKEN_CARDS.map((card, i) => (
          <TokenCard key={i} card={card} />
        ))}
      </div>
      <div className="token__swiper">
        <SwiperCarousel items={TOKEN_CARDS} renderItem={(card, i) => <TokenCard key={i} card={card} />} />
      </div>
      <UiButton variant="medium" className="token__button" href={process.env.NEXT_PUBLIC_WHITE_PAPER_URL} target="_blank">
        <span>
          white paper <LinkIcon />
        </span>
      </UiButton>
    </div>
  );
};

export default TokenCards;
