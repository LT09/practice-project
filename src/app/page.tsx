"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import {
  jsonplaceholderPhotos,
  jsonplaceholderPosts,
} from "@/shared/api/jsonplaceholderAPI";
import {
  jsonplaceholderPhotosTypes,
  jsonplaceholderPostsTypes,
} from "@/types/jsonplaceholderTypes";
import useStore from "@/shared/reducers/ZustandGlobal";
import CustomCard from "@/components/Card";
const Home = () => {
  const { usersData, onGetUsersData } = useStore((state) => ({
    usersData: state.usersData,
    onGetUsersData: state.onGetUsersData,
  }));

  const [post, setPost] = useState<jsonplaceholderPostsTypes[]>();
  const [photo, setPhoto] = useState<jsonplaceholderPhotosTypes[]>();

  const onGetPostsData = async () => {
    try {
      const res = await jsonplaceholderPosts();
      setPost(res);
    } catch (err) {
      console.log(err);
    }
  };

  const onGetPhotossData = async () => {
    try {
      const res = await jsonplaceholderPhotos();
      setPhoto(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    onGetPostsData();
    onGetPhotossData();
  }, []);

  useEffect(() => {
    onGetUsersData();
  }, [onGetUsersData]);

  return (
    <main>
      <Header title="Practice Next.js 01" usersData={usersData} />
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {photo?.slice(0, 10).map((item) => (
            <CustomCard
              key={item.id || 0}
              id={item.id || 0}
              imageSrc={item.url || ""}
              title={item.title || ""}
            />
          ))}
        </div>
      </div>

      {/* {usersData ? (
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
      )} */}
    </main>
  );
};

export default Home;
