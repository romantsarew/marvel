import { NavLink } from 'react-router-dom';
import cap404Image from '../../images/cap404.png';

const Page404 = () => {
  return (
    <div className="error">
      <div className="error__main">
        <div className="error__text">
          <h1>404 Page Not Found</h1>
          <p>Hydra is currently attacking this page!</p>
          <span>
            Check that you typed the address correctly, go back to your previous
            page or try using our site search to find something specific.
          </span>
        </div>
        <div className="error__image">
          <img
            src={cap404Image}
            width="602px"
            height="600"
            alt="Captain America."
          />
        </div>
      </div>
      <NavLink to="/">Back to main page</NavLink>
    </div>
  );
};

export default Page404;
