import { AppFooter, AppHeader, BgWrapper } from './components';
import {
  AboutSection,
  HomeSection,
  MineSection,
  PartnersSection,
  RoadmapSection,
  TokenSection
} from './components/sections';

export default function Home() {
  return (
    <div className="layout">
      <AppHeader />

      <main>
        <HomeSection />
        <AboutSection />
        <MineSection />
        <TokenSection />
        <RoadmapSection />
        <PartnersSection />
      </main>
      <AppFooter />
      <BgWrapper />
    </div>
  );
}
