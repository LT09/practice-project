"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import { jsonplaceholderPosts } from "@/shared/api/jsonplaceholderAPI";
import { jsonplaceholderPostsTypes } from "@/types/jsonplaceholderTypes";
import useStore from "@/shared/reducers/ZustandGlobal";

const Home = () => {
  const { usersData, onGetUsersData } = useStore((state) => ({
    usersData: state.usersData,
    onGetUsersData: state.onGetUsersData,
  }));

  const [data, setData] = useState<jsonplaceholderPostsTypes[]>();

  const onGetPostsData = async () => {
    try {
      const res = await jsonplaceholderPosts();
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    onGetPostsData();
  }, []);

  useEffect(() => {
    onGetUsersData();
  }, [onGetUsersData]);

  return (
    <main>
      <Header title="Practice Next.js 01" usersData={usersData} />
      {usersData ? (
        <ul>
          {usersData.map((user) => (
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
