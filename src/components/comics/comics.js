import banner from "../../images/banner.jpg";
import comics from '../../images/comics.jpg'

const Comics = () => {
  return (
    <main>
      <img src={banner} alt="comics banner." />
      <div className="comics__choose">
        <ul>
            <li>
                <img src={comics} width={225} height={346} alt='comics.'></img>
                <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
                <span>9.99$</span>
            </li>
            <li>
                <img src={comics} width={225} height={346} alt='comics.'></img>
                <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
                <span>9.99$</span>
            </li>
            <li>
                <img src={comics} width={225} height={346} alt='comics.'></img>
                <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
                <span>9.99$</span>
            </li>
            <li>
                <img src={comics} width={225} height={346} alt='comics.'></img>
                <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
                <span>9.99$</span>
            </li>
            <li>
                <img src={comics} width={225} height={346} alt='comics.'></img>
                <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
                <span>9.99$</span>
            </li>
            <li>
                <img src={comics} width={225} height={346} alt='comics.'></img>
                <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
                <span>9.99$</span>
            </li>
            <li>
                <img src={comics} width={225} height={346} alt='comics.'></img>
                <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
                <span>9.99$</span>
            </li>            <li>
                <img src={comics} width={225} height={346} alt='comics.'></img>
                <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
                <span>9.99$</span>
            </li>
        </ul>
      </div>
    </main>
  );
};

export default Comics