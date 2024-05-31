// components/Card.tsx
"use client";

import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

interface CardProps {
  id: number;
  imageSrc: string;
  title: string;
}

const CustomCard: React.FC<CardProps> = ({ id, imageSrc, title }) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/card/${id}`);
  };

  return (
    <Card className="py-4 w-full h-full">
      <CardHeader className="pb-0 pt-2 px-4 flex-row justify-between items-center">
        <h2 className="font-bold text-large">Card {id}</h2>
        <FontAwesomeIcon
          icon={faPen}
          size="lg"
          color="gray"
          className="hover:text-blue-500 transition-colors duration-300 ease-in-out"
          onClick={handleNavigate}
        />
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

export default CustomCard;
