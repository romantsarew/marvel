import { Component } from "react";
import ComicsData from "../comics-data/comics-data";
import Comics from "../comics/comics";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Header from "../header/header";
import HeroBanner from "../hero-banner/hero-banner";
import Heroes from "../heroes/heroes";
import Intro from "../intro/intro";

class App extends Component {
  state = {
    selectedHero: null
  }

  onHeroSelected = (id) => {
    this.setState({
      selectedHero: id
    })
  }

  render() {
    return (
      <div className="app" >
        <Header />
        <main>
          {/* <Comics /> */}
          <ErrorBoundary>
            <Intro />
          </ErrorBoundary>
          <section className="heroes">
            <ErrorBoundary>
              <Heroes onHeroSelected={this.onHeroSelected} />
            </ErrorBoundary>
            <ErrorBoundary>
              <HeroBanner heroId={this.state.selectedHero} />
            </ErrorBoundary>
          </section>
          {/* <ComicsData /> */}
        </main>
      </div>
    );
  }
}

export default App;
