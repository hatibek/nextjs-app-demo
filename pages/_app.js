// `pages/_app.js`
import "../styles/global.css";
import Navbar from "./navigation/navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
