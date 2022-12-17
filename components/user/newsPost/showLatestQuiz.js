import { useState, useEffect } from "react";
import { getLatestQuiz } from "../../../services/service";
import NewsPost from "./newsPost";
import styles from "./newsPost.module.css";
const ShowLatestQuiz = ({pageId}) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await getLatestQuiz();
      console.log("data from latest news :" + data);
      if (data && data !== "Error") {
        console.log('news post:'+data)
        pageId?setPosts(data.filter(d=>d._id!==pageId)):setPosts(data)
        setLoading(false);
      }
    };
    load();
  }, [pageId]);


  return (
    <>
      <div className={styles.news_grid}>
        {!isLoading &&
          posts.slice(0,9)
            .map((p, i) => <NewsPost key={p._id} {...p}></NewsPost>)}
      </div>
    </>
  );
};

export default ShowLatestQuiz;
