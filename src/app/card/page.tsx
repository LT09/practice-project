"use client";

import { Image } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import React from "react";

type cardDetail = {
  searchParams: {
    id: string;
    imageSrc: string;
    title: string;
  };
};

const CardDetail = ({ searchParams }: cardDetail) => {
  const id = searchParams.id;
  const imageSrc = searchParams.imageSrc;
  const title = searchParams.title;

  return (
    <div
      key={id}
      className="min-h-screen flex flex-col items-center justify-center p-4"
    >
      <div className="bg-white rounded-xl overflow-hidden max-w-md w-full p-4">
        <h1 className="text-2xl text-gray-800 font-bold pb-4">Card {id}</h1>
        <Image
          alt="Card detail"
          className="object-cover rounded-lg"
          src={imageSrc || ""}
          style={{ objectFit: "cover" }}
        />
        <h1 className="text-2xl text-gray-800 font-bold pt-4">{title}</h1>
      </div>
    </div>
  );
};
export default CardDetail;
