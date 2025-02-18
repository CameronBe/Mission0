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
            Page1
          </a>
        </li>
        <li>
          <a className="nav-link" href="/">
            Page2
          </a>
        </li>
        <li>
          <a className="nav-link" href="/">
            Page3
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
