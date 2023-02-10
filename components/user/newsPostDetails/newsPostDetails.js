import { useState, useEffect } from "react";
import { getNewsPost, getPost } from "../../../services/service";
import styles from "./newsPostDetails.module.css";
import OtherNewsPosts from "./otherNewsPosts";
import Link from "next/link";
import {useRouter} from "next/router";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";
import SizedBox from "../../sizedBox";
import Head from "next/head";
const NewsPostDetails = ({ pageId }) => {
  console.log("pageId:" + pageId);
  const [newsPost, setNewsPost] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [showPDF, setShowPDF] = useState(false);
  const {locale} = useRouter();
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
    <Head>
      <title>{newsPost.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Sarkari Jobs: RojgarAlerts.in Gives Job Alert For Sarkari Jobs, Sarkari Naukri, Sarkari, Sarkari Exam"></meta>
        </Head>
      <div className={styles.news_post_details}>
        <div className={styles.headline}>
          <div className={styles.news_headline_container}>
            <div className={styles.news_headline_box}>
              <h1 className={styles.headline_title}>{newsPost.title}</h1>
              <span className={styles.headline_title_meta}>
                <strong>Last Updated : </strong> {newsPost.updatedAt.substr(0, 10).split("-").reverse().join("-")}
              </span>
              <SizedBox height="30px"></SizedBox>
              <div className={styles.news_body}>
                <div className={styles.post_details}>
                  {locale==='en-us' && newsPost.posts && newsPost.board &&
                     <p className="para"><strong>Details : </strong>
                      {newsPost.board} Invites Applications From Eligible Candidates For {newsPost.posts}.
                      Interested Candidates Can Read Full Notification Below And Apply Online By Visiting Official Website.
                      </p>
                    }
                    {locale==='hi-in' && newsPost.posts && newsPost.board &&
                     <p className="para"><strong>Details : </strong>
                      {newsPost.board} Invites Applications From Eligible Candidates For HINDI {newsPost.posts}.
                      Interested Candidates Can Read Full Notification Below And Apply Online By Visiting Official Website.
                      </p>

                    }
                </div>
                <SizedBox height="20px"></SizedBox>
                {newsPost.vacancies.length>0 &&<div className={styles.highlights}>
                  <div className={styles.other_post_title+" "+"main_color"}>
                    <span>Vacancy Details</span>
                  </div>
                  <table>
                    <tr>
                      <th><strong>Title / Department</strong></th>
                      <th><strong>Seats</strong></th>
                      <th><strong>Qualification</strong></th>
                    </tr>
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
                          <td>
                           <p class="para"> <Link href={d.value} passHref={true}>{d.title?d.title:d.name}</Link></p>
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
                <h1>Latest Notifications</h1>
              </div>
              <OtherNewsPosts
                category="notification"
                pageId={pageId}
                count={newsPost.headlines ? newsPost.headlines.length : 0}
              ></OtherNewsPosts>
              <div className="view_more_link">
                <Link href={"/jobs/notification"}>View More</Link>
              </div>
              <hr />
              <div className={styles.other_post_title+" "+"main_color"}>
                <h1>PSC Jobs</h1>
              </div>
              <OtherNewsPosts
                category="upsc"
                pageId={pageId}
                count={newsPost.headlines ? newsPost.headlines.length : 0}
              ></OtherNewsPosts>
              <div className="view_more_link">
                <Link href={"/jobs/upsc"}>View More</Link>
              </div>
              <hr />
              <div className={styles.other_post_title+" "+"main_color"}>
                <h1>SSC Jobs</h1>
              </div>
              <OtherNewsPosts
                category="ssc"
                pageId={pageId}
                count={newsPost.headlines ? newsPost.headlines.length : 0}
              ></OtherNewsPosts>
              <div className="view_more_link">
                <Link href={"/jobs/ssc"}>View More</Link>
              </div>
              <hr />
              <div className={styles.other_post_title+" "+"main_color"}>
                <h1>Defence/Police Jobs</h1>
              </div>
              <OtherNewsPosts
                category="defence"
                pageId={pageId}
                count={newsPost.headlines ? newsPost.headlines.length : 0}
              ></OtherNewsPosts>
              <div className="view_more_link">
                <Link href={"/jobs/defence"}>View More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPostDetails;
