import { useState, useEffect } from "react";
import { getAllLatestPost, getLatestPost } from "../../../services/service";
import PostCategoryFrame from "./postCategoryFrame";
import styles from "./latestPost.module.css"
import Link from "next/link";
import { useRouter } from "next/router";
const LatestPost = ({category,categoryTitle, lang}) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const {locale} = useRouter();
console.log('Lang in latestPost is '+locale);
  useEffect(() => {
    const load = async () => {
      const data = category!=null?await getLatestPost(category,lang): await getAllLatestPost();
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
      <h1><Link href={"/jobs/"+category}>{categoryTitle}</Link></h1>
      </div>
      {!isLoading && (
        <PostCategoryFrame category={category} posts={posts}/>
      )}    
    </div>
    </>
  );
};

export default LatestPost;
