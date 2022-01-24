import { NextPageContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react/cjs/react.development";
import { MyPost } from "../../interfaces/post";
import MainLayout from "../../Layouts/MainLayout"

interface PostPageProps {
  post: MyPost
}

export default function Post({ post: serverPost }: PostPageProps) {
  //for v.2 start
  const router = useRouter()
  const [post, setPost]= useState(serverPost)

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/posts/${router.query.id}`)
      const data = await response.json()
      setPost(data)
    }
    if (!serverPost) {
      load()
    }
  },[])

  if (!post) {
    return (
      <MainLayout title={'Post page'}>
        <h1>Loading ... </h1>
      </MainLayout>
    )
  }
  //for v.2 end

  return (
    <MainLayout title={'Post page'}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={'/posts'}><a>go to Posts page</a></Link>
    </MainLayout>
  )
}

//v.1
// export async function getServerSideProps({query, req}) {
//   if (!req) {
//     return {
//       post: null
//     }
//   }
//   const response = await fetch(`http://localhost:4200/posts/${query.id}`)
//   const post = await response.json()
//   return {
//     props: {post}, // will be passed to the page component as props
//   }
// }

//v.2 (front-end + back-end)
interface PostNextPageContext extends NextPageContext {
  query: {
    id: string;
  }
}

Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
  if (!req) {
    return {
      post: null
    }
  }
  const response = await fetch(`${process.env.API_URL}/posts/${query.id}`)
  const post: MyPost = await response.json()
  return {
    props: { post }, // will be passed to the page component as props
  }
}