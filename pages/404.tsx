import Link from "next/link"
import MainLayout from "../Layouts/MainLayout"
import cssClasses from "../styles/404.module.css"

export default function Error() {
  return (
    <MainLayout title={'Error page'}>
      <h1 className={cssClasses.title}>Error Page</h1>
      <p>
        Go to <Link href={'/'}><a>Home page</a></Link>
      </p>
    </MainLayout>
  )
}