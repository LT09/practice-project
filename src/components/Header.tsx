"use client";

import React, { FC } from "react";
import { Button } from "@nextui-org/react";
import { jsonplaceholderUsersTypes } from "@/types/jsonplaceholderTypes";
interface HeaderProps {
  title: string;
  usersData: jsonplaceholderUsersTypes[] | undefined;
}

const Header: FC<HeaderProps> = ({ title, usersData }) => {
  return (
    <div className="bg-red-500">
      <h1 className="text-5xl font-bold">{title}</h1>
      {usersData ? (
        <ul>
          {usersData.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      <Button color="primary" radius="lg">
        Button
      </Button>
    </div>
  );
};

export default Header;
