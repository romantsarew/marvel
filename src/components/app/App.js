import ComicsData from "../comics-data/comics-data";
import Comics from "../comics/comics";
import Header from "../header/header";
import HeroBanner from "../hero-banner/hero-banner";
import Heroes from "../heroes/heroes";
import Intro from "../intro/intro";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        {/* <Comics /> */}
        <Intro />
        {/* <section className="heroes">
          <Heroes />
          <HeroBanner />
        </section> */}
        {/* <ComicsData /> */}
      </main>
    </div>
  );
}

export default App;
