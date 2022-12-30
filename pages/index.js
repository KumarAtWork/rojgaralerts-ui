import Image from "next/image";
import LatestPost from "../components/user/newsPost/latestPost";
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import Script from "next/script";
export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <>
     
        
    <div className="post_carousel">
    <div className="post_carousel_main">
    <Carousel plugins={[autoplay.current]} withIndicators height={250}  slideSize="100%" slideGap="md">
      <Carousel.Slide><Image src="/sm2.jpg" alt="Sarkarimail.com" layout="fill"></Image></Carousel.Slide>
      <Carousel.Slide><Image src="/sm1.png" alt="Sarkari Jobs | Jobs by States" layout="fill"></Image></Carousel.Slide>
      <Carousel.Slide><Image src="/sm3.png" alt="Sarkari Results | Government Jobs" layout="fill"></Image></Carousel.Slide>
    </Carousel>
    </div>
    <div className="post_carousel_content">
      <div className="post_carousel_item">
      <span className="post_btn_item">
      <button className="post_btn red">
        <label>DRDO Recruitment</label> 
        <label>650</label>  
      
      </button>
      </span>
      <span className="post_btn_item">
      <button className="post_btn blue">
      <label>DRDO Recruitment</label> 
        <label>650</label>  
  
      </button>
      </span>
      <span className="post_btn_item">
      <button className="post_btn green">
      <label>DRDO Recruitment</label> 
        <label>650</label>  
      
      </button>
      </span>
      <span className="post_btn_item">
      <button className="post_btn orange">
      <label>DRDO Recruitment</label> 
        <label>650</label>  
        
      </button>
      </span>
      <span className="post_btn_item">
      <button className="post_btn yellow">
      <label>SBI PO PO Recruitment</label> 
        <label>650</label>  
      
      </button>
      </span>
      </div>
      
      
    </div>
    </div>
    <div className="post_grid">
     <LatestPost category="notification"categoryTitle="Latest Notifications" ></LatestPost>        
      <LatestPost category="upsc" categoryTitle="UPSC Jobs"></LatestPost>
      <LatestPost category="ssc" categoryTitle="SSC Jobs"></LatestPost> 
      <LatestPost category="defence" categoryTitle="Defence/Police Jobs"></LatestPost>
      <LatestPost category="healthcare" categoryTitle="Healthcare Jobs"></LatestPost>
      <LatestPost category="banking" categoryTitle="Banking Jobs"></LatestPost>
      {/* <LatestPost category="science" categoryTitle="Science/Engineering Jobs"></LatestPost> */}
      {/* <LatestPost category="teaching" categoryTitle="Teaching Jobs"></LatestPost> */}
      {/* <LatestPost category="railways" categoryTitle="Railways Jobs"></LatestPost> */}
      <LatestPost category="other" categoryTitle="Other Jobs"></LatestPost>
      {/* <LatestPost category="result" categoryTitle="Results"></LatestPost> */}
      <LatestPost category="education" categoryTitle="Education"></LatestPost> 
    </div>
      
    </>
  );
}
