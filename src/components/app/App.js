import Header from "../header/header";
import HeroBanner from "../hero-banner/hero-banner";
import Heroes from "../heroes/heroes";
import Intro from "../intro/intro";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Intro />
        <section className="heroes">
          <Heroes />
          <HeroBanner />
        </section>
      </main>
    </div>
  );
}

export default App;
