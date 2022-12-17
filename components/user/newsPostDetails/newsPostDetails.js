import Image from "next/image";
import { useState, useEffect } from "react";
import { image_root_dir } from "../../../constants";
import { getNewsPost, getPost } from "../../../services/service";
import styles from "./newsPostDetails.module.css";
import OtherNewsPosts from "./otherNewsPosts";
import Link from "next/link";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";

const NewsPostDetails = ({ pageId }) => {
  console.log("pageId:" + pageId);
  const [newsPost, setNewsPost] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [src, setSrc] = useState("");
  useEffect(() => {
    const loadData = async () => {
      const data = await getNewsPost(pageId);
      if (data && data != "Error") {
        setNewsPost(data);
        setSrc(image_root_dir + "/images/" + pageId)
        setLoading(false);
      }
    };
    loadData();
  }, [pageId]);

  const displayTitledParagraph = (para) => {
    if (para.indexOf("Step") > -1) {
      const arr = para.split("Step");
      arr.shift();
      return arr.map((el) => <p>Step:{el}</p>);
    } else return para;
  };

  if (isLoading) return <>Loading...</>;
  return (
    <>
      <div className={styles.news_post_details}>
        <div className={styles.headline}>
          <h1 className={styles.headline_title}>{newsPost.title}</h1>
          <span className={styles.headline_title_meta}>
            Last Updated : {newsPost.updatedAt.substr(0, 10)}
          </span>
          <div className={styles.news_headline_container}>
            <div className={styles.news_headline_box}>
              <div className={styles.headline_img}>
                <Image
                  src={src + "/" + newsPost.imageName}
                  onError={() => setSrc("/logo_black.png")}
                  layout="fill"
                ></Image>
              </div>
              <div className={styles.highlights}>
                <p className="para">
                  <strong>Highlights:</strong>
                </p>
                <ul className={styles.highlight_list}>
                  {newsPost.headlines &&
                    newsPost.headlines.map((headline) => (
                      <li>
                        <p className="para">{headline}</p>
                      </li>
                    ))}
                </ul>
              </div>
              <div className={styles.news_body}>
                <div>
                  {newsPost.paragraphs &&
                    newsPost.paragraphs.map((para, i) => {
                      if (i == 0) return <p className="para">{para}</p>;
                      else return <p className="para">&nbsp;{para}</p>;
                    })}
                </div>
                <div>
                  {newsPost.titledParagraphs &&
                    newsPost.titledParagraphs.map((para, i) => (
                      <div>
                        <p className="para">
                          <strong>{para.title}</strong>
                        </p>
                        <p className={styles.para_body}>
                          {displayTitledParagraph(para.paragraph)}
                        </p>
                      </div>
                    ))}
                  <div>
                    <h3>Share it :</h3>
                    {typeof window !== undefined && (
                      <span>
                        <FacebookShareButton url={window.location.href}>
                          <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <WhatsappShareButton url={window.location.href}>
                          <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                        <TwitterShareButton url={window.location.href}>
                          <TwitterIcon size={32} round />
                        </TwitterShareButton>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.trending_jobs}>
              <p className="para">
                <strong>RECENT POSTS</strong>
              </p>
              <OtherNewsPosts
                category="news"
                pageId={pageId}
                count={newsPost.headlines ? newsPost.headlines.length : 0}
              ></OtherNewsPosts>
               <div className="view_more_link">
                <Link href={"/posts/news"}>View More</Link>
                </div>
              <hr/>
              <p className="para">
                <strong>EDUCATION</strong>
              </p>
                 <OtherNewsPosts
                category="education"
                pageId={pageId}
                count={newsPost.headlines ? newsPost.headlines.length : 0}
              ></OtherNewsPosts>
               <div className="view_more_link">
                <Link href={"/posts/education"}>View More</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPostDetails;
