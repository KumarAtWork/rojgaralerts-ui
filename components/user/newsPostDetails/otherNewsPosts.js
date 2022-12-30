import NewsPost from "../newsPost/newsPost";
import { useEffect, useState } from "react";
import { getAllLatestPost, getLatestPost } from "../../../services/service";
const OtherNewsPosts = ({ category,pageId,count }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const newsPostsSize = count+2;
  useEffect(() => {
    const load = async () => {
      const data = category!=null?await getLatestPost(category):await getAllLatestPost();
      console.log("data from latest news :" + data);
      if (data && data !== "Error") {
        console.log("news post:" + data);
        pageId
          ? setPosts(data.filter((d) => d._id !== pageId))
          : setPosts(data);
        setLoading(false);
      }
    };
    load();
  }, [pageId]);

  return (
    <>
      {!isLoading &&
        posts.slice(0, newsPostsSize).map((p, i) => (
          <div key={p._id}>
            <NewsPost  {...p}></NewsPost>
          </div>
        ))}
    </>
  );
};

export default OtherNewsPosts;
