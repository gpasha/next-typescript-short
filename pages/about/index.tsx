import { useRouter } from "next/router"
import MainLayout from "../../Layouts/MainLayout"

interface AboutPageProps {
  title: string
}

export default function About({ title }: AboutPageProps) {

  const router = useRouter()

  const goHomeHandler = () => {
    router.push('/')
  }
  
  return (
    <MainLayout title={'About page'}>
      <h1>{title}</h1>
      <button onClick={goHomeHandler}>Go to Home page</button>
      <button onClick={() => router.push('/posts')}>Go to Posts page</button>
    </MainLayout>
  )
}

interface responseData {
  title: string
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.API_URL}/about`)
  const data: responseData = await response.json()
  return {
    props: { title: data.title }, // will be passed to the page component as props
  }
}