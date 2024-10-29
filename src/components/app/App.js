import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Header from "../header/header";
import { lazy, Suspense } from "react";
import Spinner from "../spinner/spinner";

const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/MainPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage"));
const DataPage = lazy(() => import("../pages/DataPage")); // Универсальный компонент

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route
                path="/comics"
                element={
                  <ErrorBoundary>
                    <ComicsPage />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/comics/:id"
                element={
                  <ErrorBoundary>
                    <DataPage type="comic" />{" "}
                    {}
                  </ErrorBoundary>
                }
              />
              <Route
                path="/hero/:id"
                element={
                  <ErrorBoundary>
                    <DataPage type="hero" />{" "}
                    {}
                  </ErrorBoundary>
                }
              />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
