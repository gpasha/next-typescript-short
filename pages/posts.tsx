import { NextPageContext } from "next";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MyPost } from "../interfaces/post";
import MainLayout from "../Layouts/MainLayout";

interface PostPageProps {
  posts: MyPost[]
}

export default function Posts({ posts }: PostPageProps) {
  // const [posts, setPosts] = useState()

  useEffect(() => {
    // async function load() {
    //   const response = await fetch('http://localhost:4200/posts')
    //   const json = await response.json()
    //   setPosts(json)
    // }
    // load()
  }, [])

  return (
    <MainLayout title={'Posts'}>
      <h1>Posts page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} >
            <Link href={`/post/${post.id}`}><a>{post.title}</a></Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.API_URL}/posts`)
  const posts: MyPost[] = await response.json()
  return {
    props: { posts }, // will be passed to the page component as props
  }}