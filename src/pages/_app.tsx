import type { AppProps } from "next/app";
import "../pages/style.scss";
import "../components/header-section/header.scss";
import "../components/main-section/main.scss";
import "../components/footer-section/footer.scss";
import "../components/main-section/carousel-component/carousel.scss"; // Import the CSS file


function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
