import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Navbar from "./navigation/navbar";
import { getSortedPostsData } from "../utils/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home={true} pageName={"Hello!"}>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>
            My name is Hatibe. I am a software engineer, classicist, hiker and a
            cook.
          </p>
        </section>
      </Layout>
    </>
  );
}
