import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type CardType = {
  id: string;
  name: string;
  genre: string[];
  ott: string;
  img?: string;
  addedBy: string;
  link: string;
};
const WatchCard = ({ name, genre, ott, img, addedBy, link }: CardType) => {
  return (
    <Card className="mb-4">
      <Link href={link} target="_blank">
        <CardHeader>
          <CardTitle className="text-2xl">{name}</CardTitle>
          <CardDescription className="">{genre.join(", ")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <p className="">
              <span className="text-neutral-600">Added by: </span>
              {addedBy}
            </p>
            <p className="">{ott}</p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default WatchCard;
