import React from "react";

type editProfile = {
  searchParams: {
    id: string;
  };
};

const EditProfile = ({ searchParams }: editProfile) => {
  const id = searchParams.id;

  return (
    <div
      key={id}
      className="bg-white rounded-xl overflow-hidden max-w-md w-full p-4"
    >
      <h1 className="text-2xl text-gray-800 font-bold pb-4">Test</h1>
    </div>
  );
};

export default EditProfile;
