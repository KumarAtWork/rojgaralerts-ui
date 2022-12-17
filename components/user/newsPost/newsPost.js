import Image from "next/image";
import Link from "next/link";
import styles from "./newsPost.module.css";
import {image_root_dir} from "../../../constants"
import { useState } from "react";
const NewsPost = (props) => {
  const [src, setSrc] = useState(image_root_dir+"/images/"+props._id+"/"+props.imageName);
  return (
    <>
      <div className={styles.news_post}>
        <div className={styles.news_post_img}>
          {props.imageName?<Image src={src} layout='fill' onError={() => setSrc('/logo_black.png')}></Image>:<Image src="/logo_black.png" layout="fill"></Image>}
        </div>
        <div className={styles.news_post_title}>
          <Link
            href={
              "/news/" +
              props.title.replaceAll(" ", "-") +
              "?pageId=" +
              props._id
            }
            className={styles.post_title}
          >
            <p className="title">{props.title.substr(0,70)+" "+"..."}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewsPost;
