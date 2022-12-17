import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { createWrapper } from "next-redux-wrapper";
import Header from "../components/header";
import Footer from "../components/footer";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { GOOGLE_RECAPTCHA_SITE_KEY } from "../constants";

function MyApp({ Component, pageProps }) {  
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={GOOGLE_RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: false, // optional, default to false,
        defer: true, // optional, default to false
        appendTo: "body", // optional, default to "head", can be "head" or "body",
        nonce: undefined,
      }}>
        <div className="container_main">
          <Header></Header>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
          <Footer></Footer>
        </div>
      </GoogleReCaptchaProvider>

  );
}
export const wrapper = createWrapper(() => store);
export default wrapper.withRedux(MyApp);
