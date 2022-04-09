import { SWRConfig } from "swr";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
