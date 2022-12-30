import styles from "./postCategoryFrame.module.css";
import NewsPost from "./newsPost";
import Link from "next/link";
const PostCategoryFrame = ({category, posts }) => {
  return (
    <>   
        <div>
          {posts.map((p, index) => (
            <NewsPost {...p} key={index} />
          ))}
          {
            posts.length>5?<div className="view_more_link">
            <Link href={"/posts/"+category}>View More</Link>
            </div>:''}
        </div>
    </>
  );
};

export default PostCategoryFrame;
