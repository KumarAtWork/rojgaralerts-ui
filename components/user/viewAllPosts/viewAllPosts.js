import { useState, useEffect } from "react";
import { getLatestPost } from "../../../services/service";
import NewsPost from "../newsPost/newsPost";
import styles from "./viewAllPosts.module.css";
import Head from "next/head";
const ViewAllPosts = ({ param }) => {
  const [pageNum, setPageNum] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      console.debug('param:'+param);
      const result = await getLatestPost(param, pageNum);
      if (result && result !== "Error" && result.length>0) {
        setLoading(false);
        console.debug('posts length before:'+posts.length);
        if (posts.length > 0) {
          console.debug('posts length:'+posts.length);
          const arr = [...posts];
          setPosts([...arr, ...result]);
          if (result.length == 0) setLoadMore(false);
        } else setPosts(result);
      }
    };
    loadData();
  },[pageNum]);

  useEffect(() => {
    const loadData = async () => {
      console.debug('param:'+param);
      const result = await getLatestPost(param, pageNum);
      if (result && result !== "Error" && result.length>0) {
        setLoading(false);
        console.debug('posts length before:'+posts.length);
        if (posts.length > 0) {
          console.debug('posts length:'+posts.length);
          const arr = [...posts];
          setPosts([...arr, ...result]);
          if (result.length == 0) setLoadMore(false);
        } else setPosts(result);
      }
    };
    loadData();
  },[param]);

  const loadMoreHandler = () => {
    setPageNum(pageNum + 1);
  };

  const loadPageTitle = ()=>{
    if(param==='upsc')
    return "PSC Jobs";
    else if(param==='ssc')
    return "SSC Jobs"
    else if(param==='healthcare')
    return "Healthcare Jobs"
    else if(param==='banking')
    return "Banking Jobs"
    else if(param==='science')
    return "Science / Engineering Jobs"
    else if(param==='teaching')
    return "Teaching Jobs"
    else if(param==='railways')
    return "Railways Jobs"
    else if(param==='other')
    return "Other Jobs"
    else if(param==='defence')
    return "Defence Jobs"
  }
  if (!isLoading)
    return (
      <>
       <Head>
      <title>{loadPageTitle()} | Sarkari Jobs | Sarkari Result | Government Jobs | Sarkari Naukri - Sarkarimail.com</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Sarkari Jobs: Sarkarimail.com Gives Job Alert For Sarkari Jobs, Sarkari Naukri, Sarkari, Sarkari Exam"></meta>
        </Head>
      <div>
        <h1>{loadPageTitle()}</h1>
      </div>
        <div className={styles.view_all_post}>
          {posts.map((post) => (
            <NewsPost {...post} key={post._id}></NewsPost>
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
