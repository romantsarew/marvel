import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Header from "../header/header";
import { MainPage, ComicsPage, Page404, ComicsData } from "../pages";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route
              path="/comics"
              element={
                <ErrorBoundary>
                  <ComicsPage />
                </ErrorBoundary>
              }
            />
            <Route
              path="/comics/:comicId"
              element={
                <ErrorBoundary>
                  <ComicsData />
                </ErrorBoundary>
              }
            />
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<Page404 />}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
