"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { jsonplaceholderPosts } from "@/shared/api/jsonplaceholderAPI";
import { jsonplaceholderPostsTypes } from "@/types/jsonplaceholderTypes";
import { useAppState } from "@/shared/reducers/GlobalState";

const Home = () => {
  const { state } = useAppState();
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
      <Header title="Practice Next.js 01" usersData={state} />
      <p>My result: {result}</p>
      {state ? (
        <ul>
          {state.map((user) => (
            <li key={user.id}>
              <div>
                <p>{user.phone}</p>
              </div>
              <div>
                <h3>Address:</h3>
                <p>{user.address.city}</p>
              </div>
              <div>
                <h3>Company:</h3>
                <p>{user.company.name}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      <ul>
        {data?.map((item, index) => (
          <li key={item.id}>
            <h3>
              {index}. {item.title}
            </h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
