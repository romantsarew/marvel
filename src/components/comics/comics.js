import banner from "../../images/banner.jpg";
import comics from '../../images/comics.jpg'

const Comics = () => {
  return (
    <>
      <img src={banner} alt="comics banner." />
      <div className="comics__choose" data-comics-list>
        <ul>
          <li>
            <a href="#">
              <img src={comics} width={225} height={346} alt='comics.'></img>
              <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
              <span>9.99$</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={comics} width={225} height={346} alt='comics.'></img>
              <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
              <span>9.99$</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={comics} width={225} height={346} alt='comics.'></img>
              <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
              <span>9.99$</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={comics} width={225} height={346} alt='comics.'></img>
              <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
              <span>9.99$</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={comics} width={225} height={346} alt='comics.'></img>
              <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
              <span>9.99$</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={comics} width={225} height={346} alt='comics.'></img>
              <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
              <span>9.99$</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={comics} width={225} height={346} alt='comics.'></img>
              <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
              <span>9.99$</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={comics} width={225} height={346} alt='comics.'></img>
              <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
              <span>9.99$</span>
            </a>
          </li>
        </ul>
        <button className="btn" data-comics-more>LOAD MORE</button>
      </div>
    </>
  );
};

export default Comics