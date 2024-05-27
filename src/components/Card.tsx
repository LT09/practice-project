// components/Card.tsx
import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";

interface CardProps {
  id: number;
  imageSrc: string;
  title: string;
}

const Cards: React.FC<CardProps> = ({ id, imageSrc, title }) => {
  return (
    <Card className="py-4 w-80 h-84">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h2 className="font-bold text-large">Card {id}</h2>
      </CardHeader>
      <CardBody className="overflow-visible p-4 flex justify-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={imageSrc}
          style={{ objectFit: "cover" }}
        />
      </CardBody>
      <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{title}</h4>
      </CardFooter>
    </Card>
  );
};

export default Cards;
