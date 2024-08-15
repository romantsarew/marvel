import banner from "../../images/banner.jpg";
import comics_data from "../../images/comics_data.jpg";

const ComicsData = () => {
  return (
    <>
      <img src={banner} alt="comics banner." />
      <div className="comics__data">
        <img src={comics_data} alt="обложка комикса." />
        <div className="comics__text">
          <h1>X-Men: Days of Future Past</h1>
          <p>
            Re-live the legendary first journey into the dystopian future of
            2013 - where Sentinels stalk the Earth, and the X-Men are humanity's
            only hope...until they die! Also featuring the first appearance of
            Alpha Flight, the return of the Wendigo, the history of the X-Men
            from Cyclops himself...and a demon for Christmas!?
          </p>
          <p>144 pages</p>
          <p>Language: en-us</p>
          <span>9.99$</span>
        </div>
        <a href="">Back to all</a>
      </div>
    </>
  );
};

export default ComicsData