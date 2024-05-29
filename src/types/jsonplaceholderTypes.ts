export type jsonplaceholderPostsTypes = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type jsonplaceholderCommentsTypes = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type jsonplaceholderPhotosTypes = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type jsonplaceholderUsersTypes = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

export type Geo = {
  lat: string;
  lng: string;
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};
