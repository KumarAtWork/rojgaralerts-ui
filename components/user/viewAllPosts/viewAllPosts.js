import { useState, useEffect } from "react";
import { getLatestPost } from "../../../services/service";
import NewsPost from "../newsPost/newsPost";
import styles from "./viewAllPosts.module.css";
const ViewAllPosts = ({ param }) => {
  const [pageNum, setPageNum] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      const result = await getLatestPost(param, pageNum);
      if (result && result !== "Error") {
        setLoading(false);
        if (posts.length > 0) {
          const arr = [...posts];
          setPosts([...arr, ...result]);
          if (result.length == 0) setLoadMore(false);
        } else setPosts(result);
      }
    };
    loadData();
  }, [pageNum]);

  const loadMoreHandler = () => {
    setPageNum(pageNum + 1);
  };

  const loadPageTitle = ()=>{
    if(param==='news')
    return "News";
    else if(param==='education')
    return "Education"
    else if(param==='result')
    return "Result"
  }
  if (!isLoading)
    return (
      <>
      <div>
        <h3>{loadPageTitle()}</h3>
      </div>
        <div className={styles.view_all_post}>
          {posts.map((post) => (
            <NewsPost {...post}></NewsPost>
          ))}
        </div>
        <div className={styles.view_more_div}>
          {loadMore && (
            <button className={styles.view_more} onClick={() => loadMoreHandler()}>Load More</button>
          )}
        </div>
      </>
    );
  else
    return (
      <>
        <p>Loading</p>
      </>
    );
};

export default ViewAllPosts;
