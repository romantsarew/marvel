import { NavLink } from "react-router-dom";
import "./header";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <b>Marvel</b> information portal
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink
              end
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#9f0013" : "inherit",
              })}
            >
              Characters
            </NavLink>
          </li>
          /
          <li>
            <NavLink
              to="/comics"
              style={({ isActive }) => ({
                color: isActive ? "#9f0013" : "inherit",
              })}
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
