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
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4"
    >
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-md w-full">
        <Image
          alt="Card detail"
          className="object-cover rounded-xl"
          src={imageSrc || ""}
          style={{ objectFit: "cover" }}
        />
        <div className="p-4">
          <h1 className="text-2xl text-gray-800 font-bold mb-2">{title}</h1>
          <Input placeholder="Description" fullWidth />
        </div>
      </div>
    </div>
  );
};
export default CardDetail;
