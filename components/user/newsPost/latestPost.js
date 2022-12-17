import { useState, useEffect } from "react";
import { getLatestPost } from "../../../services/service";
import PostCategoryFrame from "./postCategoryFrame";
import Link from "next/link"
const LatestPost = ({category}) => {
  const [highlightPost, setHighLightPost] = useState('');
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await getLatestPost(category);
      if (data && data !== "Error") {
        setHighLightPost(data[0]);
        setPosts(data.splice(1,6));
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <>
      {!isLoading && (
        <PostCategoryFrame category={category} highlightPost={highlightPost}  posts={posts}/>
      )}
      
     
      
    </>
  );
};

export default LatestPost;
