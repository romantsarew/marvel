import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import ComicsList from "../comics/comics";
import { Helmet } from "react-helmet";

const ComicsPage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Comics list page" />
        <title>Comics list page</title>
      </Helmet>
      <ErrorBoundary>
        <ComicsList />
      </ErrorBoundary>
    </>
  );
};

export default ComicsPage;
