// components/Card.tsx
import React from "react";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title }) => {
  return (
    <div className="max-w-sm bg-blue-200 rounded overflow-hidden shadow-lg">
      <Image
        className="w-full"
        src={imageSrc}
        alt={title}
        width={400}
        height={300}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </div>
  );
};

export default Card;
