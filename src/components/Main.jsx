import Card from "./Card";
import "./main.css";

const cards = [
  {
    id: 1,
    title: "Lorem Ipsum",
    src: "src/assets/money.jpg",
    description: "Est venenatis",
  },
  {
    id: 2,
    title: "Lorem Ipsum",
    src: "src/assets/fake-news.jpg",
    description: "Est venenatis",
  },
  {
    id: 3,
    title: "Lorem Ipsum",
    src: "src/assets/scam.jpg",
    description: "Est venenatis",
  },
  {
    id: 4,
    title: "Lorem Ipsum",
    src: "src/assets/fake-news.jpg",
    description: "Est venenatis",
  },
  {
    id: 5,
    title: "Lorem Ipsum",
    src: "src/assets/scam.jpg",
    description: "Est venenatis",
  },
  {
    id: 6,
    title: "Lorem Ipsum",
    src: "src/assets/money.jpg",
    description: "Est venenatis",
  },
  {
    id: 7,
    title: "Lorem Ipsum",
    src: "src/assets/scam.jpg",
    description: "Est venenatis",
  },
  {
    id: 8,
    title: "Lorem Ipsum",
    src: "src/assets/money.jpg",
    description: "Est venenatis",
  },
  {
    id: 9,
    title: "Lorem Ipsum",
    src: "src/assets/fake-news.jpg",
    description: "Est venenatis",
  },
];

const Main = () => {
  return (
    <main className="main">
      {cards.map(({ id, src, title, description }) => {
        return (
          <Card key={id} src={src} title={title} description={description} />
        );
      })}
    </main>
  );
};

export default Main;
