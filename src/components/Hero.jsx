import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">Lorem ipsum dolor sit amet</h1>
      <form className="hero-search">
        <input className="hero-search-input" type="text" />
        <button className="hero-search-button">SEARCH</button>
      </form>
    </section>
  );
};

export default Hero;
