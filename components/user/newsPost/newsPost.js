import Link from "next/link";
import styles from "./newsPost.module.css";
const NewsPost = (props) => {
  return (
    <>
      <div className={styles.news_post}>
        <div className={styles.news_post_title}>
          <Link
            href={
              "/news/" +
              props.title.replaceAll(" ", "-") +
              "?pageId=" +
              props._id
            }
            className={styles.post_title}
          >
            <div>
            <p className="title">{props.title.substr(0,70)}</p>
            {props.lastDate && <label className={styles.last_date}><strong>Last Date : </strong>{props.lastDate}</label>}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewsPost;
