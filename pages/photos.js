import styles from "./photos.module.css";
import Layout from "../components/layout";
import ImageComponent from "../components/image";
import photos from '../public/photos'

export default function About() {
  return (
    <Layout pageName="About">
      <div className={styles.cards}>
        {photos.map((photo, index) => (
          <div className={styles.card} key={index}>
            <ImageComponent image={photo} alt={photo.alt}/>
          </div>
        ))}
      </div>
    </Layout>
  );
}
