import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { createWrapper } from "next-redux-wrapper";
import Header from "../components/header";
import Footer from "../components/footer";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { GOOGLE_RECAPTCHA_SITE_KEY } from "../constants";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {  
  const {locale} = useRouter();
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={GOOGLE_RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: false, // optional, default to false,
        defer: true, // optional, default to false
        appendTo: "body", // optional, default to "head", can be "head" or "body",
        nonce: undefined,
      }}>
         <Script id="script1" strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-H0MDGP88XT"></Script>
     <Script id="script2" strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html:` 
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-H0MDGP88XT');`}}/>
       <Head>
       <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200..900&display=swap"></link>
       </Head>
        
        <div className="container_main">
          <Header lang={locale}></Header>
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
