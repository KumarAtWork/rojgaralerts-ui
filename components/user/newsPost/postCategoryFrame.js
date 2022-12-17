import Image from "next/image";
import styles from "./postCategoryFrame.module.css";
import NewsPost from "./newsPost";
import { image_root_dir } from "../../../constants";
import Link from "next/link";
import { useState } from "react";
const PostCategoryFrame = ({category, highlightPost, posts }) => {
  console.log("highlighPost:" + highlightPost);
  const [posts1, setPosts1] = useState([...posts.slice(0, 3)]);
  const [posts2, setPosts2] = useState([...posts.slice(3, 6)]);
  const [src, setSrc] = useState(
    image_root_dir +
      "/images/" +
      highlightPost._id +
      "/" +
      highlightPost.imageName
  );
  return (
    <>
      <div className={styles.highlight_post}>
        <Link
          href={
            "/news/" +
            highlightPost.title.replaceAll(" ", "-") +
            "?pageId=" +
            highlightPost._id
          }
          className={styles.post_title}
        >
          <div>
            <div className={styles.highlight_post_img}>
              {highlightPost.imageName ? (
                <Image
                  src={src}
                  layout="fill"
                  onError={() => setSrc("/logo_black.png")}
                ></Image>
              ) : (
                <Image src="/logo_black.png" layout="fill"></Image>
              )}
            </div>
            <div className={styles.highlight_post_content}>
              {highlightPost.displayTitle && highlightPost.displayTitle!==''?highlightPost.displayTitle.substr(0, 1).toUpperCase() +
                highlightPost.displayTitle.substring(1): highlightPost.title.substr(0, 1).toUpperCase() +
                highlightPost.title.substring(1)}
            </div>
          </div>
        </Link>
        <div className={styles.highlight_post_others}>
          {posts1.map((p, index) => (
            <NewsPost {...p} key={index} />
          ))}
        </div>
        <div className={styles.highlight_post_others}>
          {posts2.map((p, index) => (
            <NewsPost {...p} key={index} />
          ))}
           <div className="view_more_link">
            <Link href={"/posts/"+category}>View More</Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default PostCategoryFrame;
