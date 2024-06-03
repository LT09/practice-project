"use client";

import { Image, Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import React from "react";

const CardDetail = () => {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  const imageSrc = searchParams.get("imageSrc");
  const title = searchParams.get("title");

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
