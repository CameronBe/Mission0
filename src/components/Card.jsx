import "./card.css";

const Card = ({ src, title, description }) => {
  return (
    <div className="card">
      <a href="/">
        <img className="card-image" src={src} alt={description} />
      </a>
      <div className="card-info">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
