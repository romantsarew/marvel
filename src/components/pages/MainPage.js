import { useState } from "react";

import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Heroes from "../heroes/heroes";
import Intro from "../intro/intro";
import HeroBanner from "../hero-banner/hero-banner";
import HeroSearch from "../hero-search/hero-search";

const MainPage = () => {
  const [selectedHero, setHero] = useState(null);

  const onHeroSelected = (id) => {
    setHero(id);
  };

  return (
    <>
      <ErrorBoundary>
        <Intro />
      </ErrorBoundary>
      <section className="heroes">
        <ErrorBoundary>
          <Heroes onHeroSelected={onHeroSelected} />
        </ErrorBoundary>
        <ErrorBoundary>
          <div className="heroes__side">
            <HeroBanner heroId={selectedHero} />
            <HeroSearch />
          </div>
        </ErrorBoundary>
      </section>
    </>
  );
};

export default MainPage;
