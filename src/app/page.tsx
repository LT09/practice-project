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
import Cards from "@/components/Card";
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
      <Cards
        id={photo?.[0]?.id || 0}
        imageSrc={photo?.[0]?.url || ""}
        title={photo?.[0]?.title || ""}
      />
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
        {post?.map((item, index) => (
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
