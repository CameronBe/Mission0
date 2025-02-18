import Nav from "./Nav";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-brand">
        <img className="header-logo" src="src/assets/logo.png" alt="Logo" />
        <p className="header-name">Fake News</p>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
