import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <img
        className="nav-hamburger"
        src="src/assets/hamburger.png"
        alt="nav-hamburger"
      />
      <ul className="nav-list">
        <li>
          <a className="nav-link" href="/">
            Lorem
          </a>
        </li>
        <li>
          <a className="nav-link" href="/">
            Ipsum
          </a>
        </li>
        <li>
          <a className="nav-link" href="/">
            Dolor
          </a>
        </li>
        <li>
          <a className="nav-link nav-login-link" href="/">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
