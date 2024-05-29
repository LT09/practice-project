export const jsonplaceholderPosts = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const jsonplaceholderComments = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const jsonplaceholderPhotos = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const jsonplaceholderUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
