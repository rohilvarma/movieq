import WatchCard from "./WatchCard";

const WatchStack = () => {
  type CardType = {
    id: string;
    name: string;
    genre: string[];
    ott: string;
    img?: string;
    addedBy: string;
    link: string;
  };
  const data: CardType[] = [
    {
      id: "Asd",
      name: "Modern family",
      genre: ["Comedy", "Family", "Light hearted"],
      ott: "Netflix",
      addedBy: "Rohil",
      link: "/",
    },
    {
      id: "Asd11",
      name: "New girl",
      genre: ["Family", "Romance"],
      ott: "Netflix",
      addedBy: "Ishita",
      link: "/",
    },
    {
      id: "Asd234",
      name: "Ozark",
      genre: ["Thriller"],
      ott: "Netflix",
      addedBy: "Rohil",
      link: "/",
    },
  ]
  return (
    <div className="">
      <h1>WatchStack</h1>
      {
        data.map(movie => <WatchCard key={movie.id} {...movie} />)
      }
    </div>
  );
};

export default WatchStack;
