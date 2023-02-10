import Image from "next/image";
import LatestPost from "../components/user/newsPost/latestPost";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
export default function IndexHN() {
  const {locale} = useRouter();
  console.log('locales in index:'+locale);
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <>
     <Head>
      <title>Sarkari Exams | Sarkari Results | सरकारी नौकरियाँ | गवर्नमेंट जॉब्स | Free Job Alerts - RojgarAlerts.in</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="RojgarAlerts.in provides free job alerts of Sarkari Jobs, Sarkari Exams and Government Jobs"></meta>
        </Head>
      <div className="post_carousel">
        <div className="post_carousel_content">
          <div className="post_carousel_item">
            <span className="post_btn_item">
              <button className="post_btn red">
                <h1>
                  <Link href="/jobs/upsc">प्रशासनिक</Link>
                </h1>
              </button>
            </span>
            <span className="post_btn_item">
              <button className="post_btn blue">
                <h1>
                  <Link href="/jobs/ssc">एसएससी</Link>
                </h1>
              </button>
            </span>
            <span className="post_btn_item">
              <button className="post_btn green">
                <h1>
                  <Link href="/jobs/defence">रक्षा / पुलिस</Link>
                </h1>
              </button>
            </span>
            <span className="post_btn_item">
              <button className="post_btn purple">
                <h1>
                  <Link href="/jobs/teaching">टीचिंग</Link>
                </h1>
              </button>
            </span>
        
            <span className="post_btn_item">
              <button className="post_btn orange">
                <h1>
                  <Link href="/jobs/railways">रेलवे</Link>
                </h1>
              </button>
            </span>
            
          </div>
        </div>
      </div>
      <div className="post_grid">
        <LatestPost
          category="notification"
          categoryTitle="नवीनतम अधिसूचना"
          lang="hn"
        ></LatestPost>
        <LatestPost category="administrative" categoryTitle="प्रशासनिक जॉब्स" lang="hn"></LatestPost>
        <LatestPost category="ssc" categoryTitle="एसएससी जॉब्स" lang="hn"></LatestPost>
        <LatestPost
          category="defence"
          categoryTitle="डिफेंस/पुलिस जॉब्स"
          lang="hn"
        ></LatestPost>
        <LatestPost
          category="healthcare"
          categoryTitle="हेल्थकेयर जॉब्स"
          lang="hn"
        ></LatestPost>
        <LatestPost
          category="banking"
          categoryTitle="बैंकिंग जॉब्स"
          lang="hn"
        ></LatestPost>
        <LatestPost
          category="science"
          categoryTitle="साइंस / इंजीनियरिंग जॉब्स"
          lang="hn"
        ></LatestPost>
        <LatestPost
          category="teaching"
          categoryTitle="टीचिंग जॉब्स"
          lang="hn"
        ></LatestPost>
        <LatestPost
          category="railways"
          categoryTitle="रेलवे जॉब्स"
          lang="hn"
        ></LatestPost>
        <LatestPost category="other" categoryTitle="अन्य जॉब्स" lang="hn"></LatestPost>
        {/* <LatestPost category="result" categoryTitle="Results"></LatestPost> */}
        {/* <LatestPost category="education" categoryTitle="Education"></LatestPost>  */}
      </div>
    </>
  );
}
