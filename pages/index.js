import { Fragment } from 'react'
import Hello from '../components/home-page.js/Hello'
import FeaturedPosts from '../components/home-page.js/featured-posts';

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
function HomePage() {
  return (
    <Fragment>
      <Hello />
      <FeaturedPosts posts={DUMMY_POSTS }/>
    </Fragment>
  )
}

export default HomePage