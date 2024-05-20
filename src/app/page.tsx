"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "./components/Header";

interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [data, setData] = useState<Data[]>();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const extraFunction = (num1: number, num2: number) => {
    return num1 * num2;
  };

  const result = extraFunction(2, 3);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <Header title="Practice Next.js 01" />
      <p>My result: {result}</p>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
