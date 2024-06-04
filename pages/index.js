import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is Hatibe. I am a software engineer, classicist, hiker and a chef.</p>
        <p>
          LINKS
        </p>
      </section>
    </Layout>
  );
}
