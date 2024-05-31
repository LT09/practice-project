import { Input } from "@nextui-org/react";
import React from "react";

const CardDetail = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-md w-full">
        <div
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}
        ></div>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-2">Title Here</h1>
          <Input placeholder="Description" fullWidth />
        </div>
      </div>
    </div>
  );
};
export default CardDetail;
