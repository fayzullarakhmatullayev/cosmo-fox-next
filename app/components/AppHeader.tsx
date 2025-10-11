"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import { startTransition, useState } from "react";

import { ArrayDownIcon, BurgerIcon, CloseIcon, LocaleIcon } from "../assets/icons";
import { MobileMenu, UiButton } from "./";

import { LOCALES, NAVS } from "@/constants";
import { useRouter } from "next/navigation";

const AppHeader = () => {
  const [isLocaleVisible, setIsLocaleVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  const currentLocaleName = LOCALES.find(l => l.code === locale)?.name || locale;

  const handleLocaleChange = (newLocale: string) => {
    setIsLocaleVisible(false);

    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

    startTransition(() => {
      router.refresh();
    });
  };

  const handleBurgerClick = () => {
    setIsMenuVisible(!isMenuVisible);
    document.body.style.overflow = isMenuVisible ? "auto" : "hidden";
  };

  const goTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__nav">
            {/* Logo */}
            <a href="#" className="header__nav--logo" onClick={goTop}>
              <Image src="/images/logo.png" alt="logo" width={35} height={43} />
            </a>
            {/* Nav Items */}
            <nav className="header__nav--links">
              {NAVS.map(nav => (
                <a href={nav.to} key={nav.label}>
                  {t(nav.label)}
                </a>
              ))}
              <a href={process.env.NEXT_PUBLIC_WHITE_PAPER_URL} target="_blank">
                {t("nav.white-paper")}
              </a>
              <a href={process.env.NEXT_PUBLIC_BLOG_URL} target="_blank">
                {t("nav.blog")}
              </a>
            </nav>
          </div>

          {/* Locales */}
          <div className="header__right">
            {/* Play Button */}
            <UiButton
              href={process.env.NEXT_PUBLIC_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="header__right--btn"
            >
              {t("play")}
            </UiButton>

            {/* Language Selector */}
            <div className="header__lang">
              {/* Desktop View - Selected Language */}
              <div className="header__lang--selected" onClick={() => setIsLocaleVisible(!isLocaleVisible)}>
                <ArrayDownIcon />
                <span>{t(currentLocaleName)}</span>
              </div>

              {/* Mobile View - Globe Icon */}
              <div className="header__lang--icon" onClick={() => setIsLocaleVisible(!isLocaleVisible)}>
                <LocaleIcon />
              </div>

              {/* Language Dropdown */}
              {isLocaleVisible && (
                <div className="header__lang--list">
                  {LOCALES.map(l => (
                    <button
                      key={l.code}
                      className={l.code === locale ? "active" : ""}
                      onClick={() => handleLocaleChange(l.code)}
                    >
                      {t(l.name)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Burger Menu */}
            <div className="header__burger" onClick={handleBurgerClick}>
              {isMenuVisible ? <CloseIcon /> : <BurgerIcon />}
            </div>
          </div>
        </div>
      </div>
      {isMenuVisible && <MobileMenu onClose={handleBurgerClick} />}
    </header>
  );
};

export default AppHeader;
