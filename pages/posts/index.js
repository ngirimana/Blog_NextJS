import React from "react";
import AllPosts from "../../components/posts/all-post";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started With NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is  the React Frameworks for production - it makes building fullstack React apps a breeze and ships with built-in SSR",
    date: "2022=02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started With NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is  the React Frameworks for production - it makes building fullstack React apps a breeze and ships with built-in SSR",
    date: "2022=02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started With NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is  the React Frameworks for production - it makes building fullstack React apps a breeze and ships with built-in SSR",
    date: "2022=02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started With NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is  the React Frameworks for production - it makes building fullstack React apps a breeze and ships with built-in SSR",
    date: "2022=02-10",
  },
];

function AllPostPage() {
  return <AllPosts posts={ DUMMY_POSTS}/>
}

export default AllPostPage;
