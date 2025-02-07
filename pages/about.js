import styles from "./about.module.css";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout home={false}>
      <div className={styles.header}>About Me</div>
      <div className={styles.about_me_p}>
        I am a software engineer with 2+ years of professional software
        development experience.{" "}
      </div>
    </Layout>
  );
}
