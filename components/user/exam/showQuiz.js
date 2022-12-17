import Link from "next/link";
import styles from "./showQuiz.module.css";
const ShowQuiz = ({title,examId}) => {
  return (
    <>
      <div className={styles.news_post}>
        <div className={styles.news_post_title}>
          <Link
            href={
              "/quizzes/" + title.replaceAll(" ", "-") + "?examId=" + examId
            }
            className={styles.post_title}
          >
            <p className="title">{title}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShowQuiz;
