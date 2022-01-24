import Head from "next/head"
import Link from "next/link"

export default function MainLayout({ children, title = 'Next App' }) {
  return (
    <>
      <Head>
        <title>{title} | Next Course</title>
        <meta name='keywords' content="next.js, next, nextjs, neact.js, neact, javascript" />
        <meta name='description' content="Next.js course" />
        <meta charSet='UTF-8'/>
      </Head>
      <nav>
        <Link href={'/'}>
          <a>go to Home page</a>
        </Link>
        <Link href={'/about'}>
          <a>go to About page</a>
        </Link>
        <Link href={'/posts'}>
          <a>go to Post page</a>
        </Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>{`
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 60px;
          padding: 0 25px;
          background-color: darkblue;
        }
        nav a {
          color: #fff;
          text-decoration: none;
          font-size: 20px;
        }
        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}
      </style>
    </>
  )
}