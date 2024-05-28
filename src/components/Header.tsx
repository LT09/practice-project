"use client";

import React, { FC } from "react";
import { Button } from "@nextui-org/react";
import { jsonplaceholderUsersTypes } from "@/types/jsonplaceholderTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import ProfileImage from "./ProfileImage";
interface HeaderProps {
  title: string;
  usersData: jsonplaceholderUsersTypes[] | undefined;
}

const Header: FC<HeaderProps> = ({ title, usersData }) => {
  return (
    <div className="bg-blue-700 lg:p-8 p-4">
      <h1 className="text-5xl font-bold pb-6">{title}</h1>
      {usersData ? (
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6 p-4">
          <ProfileImage />
          <div className="text-center md:text-left">
            <p className="text-4xl font-bold">{usersData[0].name}</p>
            <p className="text-xl">
              {usersData[0].company.catchPhrase} @ {usersData[0].company.name}
            </p>
            <p className="text-lg">Email: {usersData[0].email}</p>
            <p className="text-lg">Phone: {usersData[0].phone}</p>
            <p className="text-lg font-light">
              City: {usersData[0].address.city}
            </p>
            <Button
              className="my-3 w-full"
              color="default"
              radius="sm"
              startContent={<FontAwesomeIcon icon={faPen} />}
            >
              Edit profile
            </Button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Header;
