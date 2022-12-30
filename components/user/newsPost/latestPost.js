import { useState, useEffect } from "react";
import { getAllLatestPost, getLatestPost } from "../../../services/service";
import PostCategoryFrame from "./postCategoryFrame";
import styles from "./latestPost.module.css"
const LatestPost = ({category,categoryTitle}) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = category!=null?await getLatestPost(category): await getAllLatestPost();
      if (data && data !== "Error") {
        setPosts(data.splice(0,5));
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <>
    <div className={styles.post_grid_item}>
      <div className={styles.post_grid_item_title + " "+"main_color"}>
      <span>{categoryTitle}</span>
      </div>
      {!isLoading && (
        <PostCategoryFrame category={category} posts={posts}/>
      )}    
    </div>
    </>
  );
};

export default LatestPost;
