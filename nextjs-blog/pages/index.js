import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';


export default function Home ({ allPostsData })
 {
  return (
    <Layout home>
      <Head>
        <title>New Ruby Blog </title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello I am Ruby. I am studyin at SRJC to become a Front-End Web Developer.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>



      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>

      
    </Layout>
  );
}
