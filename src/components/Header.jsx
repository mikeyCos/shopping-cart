import { Link } from "react-router-dom";
import GitHubIcon from "../assets/icons/github-mark/github-mark.svg?react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-left">
          <li>
            <Link to="/">
              <img src="#" alt="" />
              <h1>Logo</h1>
            </Link>
          </li>
        </ul>

        <ul className="nav-right">
          <li>
            <Link to="/Placeholder_00">Placeholder_00</Link>
          </li>

          <li>
            <Link to="/Placeholder_01">Placeholder_01</Link>
          </li>

          <li>
            <a href="#" target="_blank">
              <GitHubIcon className="icon github" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
