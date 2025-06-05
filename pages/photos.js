import styles from "./photos.module.css";
import Layout from "../components/layout";
import ImageComponent from "../components/image";

export default function About() {
  return (
    <Layout pageName="About">
      <div className={styles.header}>About Content</div>
      <ImageComponent />
    </Layout>
  );
}
