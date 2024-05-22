"use client";
import React, { FC } from "react";
import { Button } from "@nextui-org/react";
interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <div className="bg-red-500">
      <h1 className="text-5xl font-bold">{title}</h1>
      <Button color="primary" radius="lg">
        Button
      </Button>
    </div>
  );
};

export default Header;
