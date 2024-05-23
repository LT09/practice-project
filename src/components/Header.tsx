"use client";
import React, { FC, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { jsonplaceholderUsersTypes } from "@/types/jsonplaceholderTypes";
import useStore from "@/shared/reducers/ZustandGlobal";
interface HeaderProps {
  title: string;
  usersData: jsonplaceholderUsersTypes[] | undefined;
}

const Header: FC<HeaderProps> = ({ title, usersData }) => {
  const value = useStore((state) => state.bears);
  const { users, fetchUsersData, increasePopulation } = useStore((state) => ({
    users: state.users,
    fetchUsersData: state.fetchUsersData,
    increasePopulation: state.increasePopulation,
  }));

  useEffect(() => {
    fetchUsersData();
  }, [fetchUsersData]);

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
      <Button color="primary" radius="lg" onClick={increasePopulation}>
        Button
      </Button>
      <p>{value}</p>
      {users ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Header;
