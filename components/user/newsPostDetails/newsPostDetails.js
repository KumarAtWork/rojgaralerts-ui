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
import SizedBox from "../../sizedBox";
import Script from "next/script";
const NewsPostDetails = ({ pageId }) => {
  console.log("pageId:" + pageId);
  const [newsPost, setNewsPost] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [showPDF, setShowPDF] = useState(false);
  useEffect(() => {
    const loadData = async () => {
      const data = await getNewsPost(pageId);
      if (data && data != "Error") {
        setNewsPost(data);    
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
          <div className={styles.news_headline_container}>
            <div className={styles.news_headline_box}>
              <h1 className={styles.headline_title}>{newsPost.title}</h1>
              <span className={styles.headline_title_meta}>
                Last Updated : {newsPost.updatedAt.substr(0, 10)}
              </span>
              <SizedBox height="30px"></SizedBox>
              <div className={styles.news_body}>
                <div>
                  {newsPost.paragraphs &&
                    newsPost.paragraphs.map((para, i) => {
                      if (i == 0) return <p className="para"><strong>Details : </strong>{para}</p>;
                      else return <p className="para">&nbsp;{para}</p>;
                    })}
                </div>
                {newsPost.headlines.length>0 && <div className={styles.highlights}>
                  <div className={styles.other_post_title+" "+"main_color"}>
                    <span>Highlights</span>
                  </div>
                  <ul className={styles.highlight_list}>
                    {
                      newsPost.headlines.map((headline) => (
                        <li>
                          <p className="para">{headline}</p>
                        </li>
                      ))}
                  </ul>
                </div>}
                <SizedBox height="20px"></SizedBox>
                {newsPost.vacancies.length>0 &&<div className={styles.highlights}>
                  <div className={styles.other_post_title+" "+"main_color"}>
                    <span>Vacancy Details</span>
                  </div>
                  <table>
                    {newsPost.vacancies.map((d) => (
                        <tr>
                          {d.title&&<td>
                            <p className="para">{d.title}</p>
                            </td>}
                          <td>
                            <p className="para">{d.name}</p>
                          </td>
                          <td>
                            <p className="para">{d.value}</p>
                          </td>
                        </tr>
                      ))}
                  </table>
                </div>}
                <SizedBox height="20px"></SizedBox>
                {newsPost.impDates.length>0 && <div className={styles.highlights}>
                  <div className={styles.other_post_title+" "+"main_color"}>
                    <span>Important Dates</span>
                  </div>
                  <table>
                    {newsPost.impDates &&
                      newsPost.impDates.map((d) => (
                        <tr>
                           {d.title&&<td>
                            <p className="para">{d.title}</p>
                            </td>}
                          <td>
                            <p className="para">{d.name}</p>
                          </td>
                          <td>
                            <p className="para">{d.value}</p>
                          </td>
                        </tr>
                      ))}
                  </table>
                </div>}
                <SizedBox height="20px"></SizedBox>
                {newsPost.impLinks.length>0 && <div className={styles.highlights}>
                  <div className={styles.other_post_title+" "+"main_color"}>
                    <span>Important Links</span>
                  </div>
                  <table>
                    {newsPost.impLinks.map((d) => (
                        <tr>
                           {d.title&&<td>
                            <p className="para">{d.title}</p>
                            </td>}
                          <td>
                           <p class="para"> <Link href={d.value} passHref={true}>{d.name}</Link></p>
                          </td>
                        </tr>
                      ))}
                  </table>
                </div>}
                <SizedBox height="20px"></SizedBox>
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
              <div className={styles.other_post_title+" "+"main_color"}>
                <span>Latest Jobs</span>
              </div>
              <OtherNewsPosts
                pageId={pageId}
                count={newsPost.headlines ? newsPost.headlines.length : 0}
              ></OtherNewsPosts>
              <div className="view_more_link">
                <Link href={"/posts/"}>View More</Link>
              </div>
              <hr />
              <div className={styles.other_post_title+" "+"main_color"}>
                <span>UPSC Jobs</span>
              </div>
              <OtherNewsPosts
                category="upsc"
                pageId={pageId}
                count={newsPost.headlines ? newsPost.headlines.length : 0}
              ></OtherNewsPosts>
              <div className="view_more_link">
                <Link href={"/posts/upsc"}>View More</Link>
              </div>
              <hr />
              <div className={styles.other_post_title+" "+"main_color"}>
                <span>SSC Jobs</span>
              </div>
              <OtherNewsPosts
                category="ssc"
                pageId={pageId}
                count={newsPost.headlines ? newsPost.headlines.length : 0}
              ></OtherNewsPosts>
              <div className="view_more_link">
                <Link href={"/posts/ssc"}>View More</Link>
              </div>
              <hr />
              <div className={styles.other_post_title+" "+"main_color"}>
                <span>Defence/Police Jobs</span>
              </div>
              <OtherNewsPosts
                category="defence"
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
