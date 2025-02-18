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
          <a className="nav-link" href="#page1">
            Page1
          </a>
        </li>
        <li>
          <a className="nav-link" href="#page2">
            Page2
          </a>
        </li>
        <li>
          <a className="nav-link" href="#page3">
            Page3
          </a>
        </li>
        <li>
          <a className="nav-link nav-login-link" href="#login">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
