import Layout from "../components/layout";
import Link from "next/link";
import Date from "../components/date";
import styles from "./posts.module.css";
import utilStyles from "../styles/utils.module.css";
import {getSortedPostsData} from '../utils/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Experience({ allPostsData }) {
  return (
    <Layout pageName="Posts">
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </section>
    </Layout>
  );
}
