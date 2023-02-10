import Image from "next/image";
import LatestPost from "../components/user/newsPost/latestPost";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Link from "next/link";
import Head from "next/head";
export default function IndexEN() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <>
     <Head>
      <title>Sarkari Jobs | Sarkari Result | Government Jobs | Sarkari Naukri - RojgarAlerts.in</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="RojgarAlerts.in provides free job alerts of Sarkari Jobs, Sarkari Exams and Government Jobs"></meta>
        </Head>
      <div className="post_carousel">
        <div className="post_carousel_content">
          <div className="post_carousel_item">
            <span className="post_btn_item">
              <button className="post_btn red">
                <h1>
                  <Link href="/jobs/administrative">PSC</Link>
                </h1>
              </button>
            </span>
            <span className="post_btn_item">
              <button className="post_btn blue">
                <h1>
                  <Link href="/jobs/ssc">SSC</Link>
                </h1>
              </button>
            </span>
            <span className="post_btn_item">
              <button className="post_btn green">
                <h1>
                  <Link href="/jobs/defence">Defence</Link>
                </h1>
              </button>
            </span>
            <span className="post_btn_item">
              <button className="post_btn purple">
                <h1>
                  <Link href="/jobs/teaching">Teaching</Link>
                </h1>
              </button>
            </span>
        
            <span className="post_btn_item">
              <button className="post_btn orange">
                <h1>
                  <Link href="/jobs/railways">Railways</Link>
                </h1>
              </button>
            </span>
            
          </div>
        </div>
      </div>
      <div className="post_grid">
        <LatestPost
          category="notification"
          categoryTitle="Latest Notifications"
        ></LatestPost>
        <LatestPost category="administrative" categoryTitle="PSC Jobs"></LatestPost>
        <LatestPost category="ssc" categoryTitle="SSC Jobs"></LatestPost>
        <LatestPost
          category="defence"
          categoryTitle="Defence / Police Jobs"
        ></LatestPost>
        <LatestPost
          category="healthcare"
          categoryTitle="Healthcare Jobs"
        ></LatestPost>
        <LatestPost
          category="banking"
          categoryTitle="Banking Jobs"
        ></LatestPost>
        <LatestPost
          category="science"
          categoryTitle="Science / Engineering Jobs"
        ></LatestPost>
        <LatestPost
          category="teaching"
          categoryTitle="Teaching Jobs"
        ></LatestPost>
        <LatestPost
          category="railways"
          categoryTitle="Railways Jobs"
        ></LatestPost>
        <LatestPost category="other" categoryTitle="Other Jobs"></LatestPost>
        {/* <LatestPost category="result" categoryTitle="Results"></LatestPost> */}
        {/* <LatestPost category="education" categoryTitle="Education"></LatestPost>  */}
      </div>
    </>
  );
}
