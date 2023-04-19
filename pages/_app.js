import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { useEffect} from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
