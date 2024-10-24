import { useState } from "react";

import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Heroes from "../heroes/heroes";
import Intro from "../intro/intro";
import HeroBanner from "../hero-banner/hero-banner";

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
          <HeroBanner heroId={selectedHero} />
        </ErrorBoundary>
      </section>
    </>
  );
};

export default MainPage