import Link from "next/link"
import MainLayout from "../Layouts/MainLayout"

export default function Index() {
  return (
    <MainLayout title={'Home page'}>
      <h1>Hello Next.js</h1>
    </MainLayout>
  )
}