import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import ComicsList from "../comics/comics";

const ComicsPage = () => {
  return (
    <>
      <ErrorBoundary>
        <ComicsList />
      </ErrorBoundary>
    </>
  );
};

export default ComicsPage