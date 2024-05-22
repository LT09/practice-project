"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { jsonplaceholderPosts } from "@/shared/api/jsonplaceholderAPI";
import { jsonplaceholderPostsTypes } from "@/types/jsonplaceholderTypes";

const Home = () => {
  const [data, setData] = useState<jsonplaceholderPostsTypes[]>();

  const onGetPostsData = async () => {
    try {
      const res = await jsonplaceholderPosts();
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };

  const extraFunction = (num1: number, num2: number) => {
    return num1 * num2;
  };

  const result = extraFunction(2, 3);

  useEffect(() => {
    onGetPostsData();
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
};

export default Home;
