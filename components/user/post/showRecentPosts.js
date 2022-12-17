import { useEffect, useState } from "react";
import { showAllRecentPost } from "../../../services/service";
import Post from "../post/post"
import styles from "./post.module.css"
const ShowRecentPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      const data = await showAllRecentPost();
      if (data && data !== "Error") {
        setPosts(data);
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <div className={styles.posts_grid}>
      {!isLoading && posts.map((post) => 
        <div key={post.id}>
          <Post {...post}></Post>
        </div>
      )}
    </div>
  );
};

export default ShowRecentPosts;
