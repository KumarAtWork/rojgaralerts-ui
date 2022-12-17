import { useEffect, useState } from "react";
import { saveNewsPost } from "../../services/service";
import styles from "../../styles/newsPost.module.css";
import { useRouter } from "next/router";

const NewsPost = () => {
  const [title, setTitle] = useState("");
  const [displayTitle, setDisplayTitle] = useState("");
  const [imageName, setImageName] = useState("");
  const [headline, setHeadline] = useState("");
  const [hIndex, setHIndex] = useState(-1);
  const [headlines, setHeadlines] = useState([]);
  const [paragraph, setParagraph] = useState("");
  const [paragraphs, setParagraphs] = useState([]);
  const [titledParagraphs, setTitledParagraphs] = useState([]);
  const [mTitle, setMTitle] = useState("");
  const [mImageName, setMImageName] = useState("");
  const [mParagraph, setMParagraph] = useState("");
  const [category, setCategory] = useState("news");
  const router = useRouter();
  const isBrowser = typeof window !== "undefined";
  const headlineHandler = () => {
    if (hIndex >= 0) {
      console.log("hIndex>=0");
      const arr = [...headlines]; // only putting headlines will not work as it will still be old array by reference
      arr[hIndex] = headline;
      setHIndex(-1);
      setHeadlines(arr);
      console.log("headlines after modif:" + headlines);
    } else setHeadlines([...headlines, headline]);
  };

  const addParagraphHandler = () => {
    if (hIndex >= 0) {
      const arr = [...paragraphs];
      arr[hIndex] = paragraph;
      setHIndex(-1);
      setParagraphs(arr);
    } else setParagraphs([...paragraphs, paragraph]);
    setParagraph("");
  };

  useEffect(() => {
    console.log("rerendering");
    setHeadline("");
    setParagraph("");
  }, [headlines]);

  const addSubTitleHandler = () => {
    if (hIndex >= 0) {
      const arr = [...titledParagraphs];
      arr[hIndex] = { title: mTitle, paragraph: mParagraph };
      setHIndex(-1);
      setTitledParagraphs(arr);
    } else
      setTitledParagraphs([
        ...titledParagraphs,
        { title: mTitle, paragraph: mParagraph },
      ]);
    setMTitle("");
    setMParagraph("");
  };

  const submitNewsPostHandler = async () =>{
    console.log('In submit post');
    console.log('In submit post title'+title);
    const data = await saveNewsPost({'title':title,'displayTitle':displayTitle,'category':category,'headlines':headlines,'paragraphs':paragraphs,'titledParagraphs':titledParagraphs})
    if(data!='Error'){
      console.log('Response received after calling saveNewsPost:'+data)
      console.log('post saved with :'+data)
      router.push({
        pathname:'/admin/post/upload',
        query:{_id:data}
      })
    }
    else
    console.error('Error in saving post');
  }

  return (
    <> <button className={styles.submit_news_post_btn} onClick={()=>submitNewsPostHandler()}>Submit News Post</button>
      <div className={styles.news_post}>
        
        <div className={styles.news_post_para}>
          <div>
          <select value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option value="news">News</option>
            <option value="education">Education</option>
            <option value="result">Result</option>
          </select>
          <input
              style={{ marginBottom: "10px" }}
              type="text"
              placeholder="Display Title"
              name="displayTitle"
              onChange={(e) => setDisplayTitle(e.target.value)}
            ></input>
            <input
              style={{ marginBottom: "10px" }}
              type="text"
              placeholder="Title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <div className={styles.headline_input}>
              <input
                type="text"
                placeholder="Headline"
                name="headline"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
              ></input>
              <button
                onClick={() => headlineHandler()}
                className={styles.add_headline_btn}
              >
                Add
              </button>
            </div>
            <div className={styles.headlines_container}>
              {headlines.length > 0
                ? headlines.map((h, i) => (
                    <div style={{ marginBottom: "10px" }}>
                      <span>{h}</span>
                      <button
                        className={styles.edit_headline_btn}
                        onClick={() => {
                          setHIndex(i);
                          setHeadline(h);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className={styles.edit_headline_btn}
                        onClick={() => {
                          const arr = [...headlines];
                          arr.splice(i, 1);
                          setHeadlines(arr);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  ))
                : ""}
            </div>
            <div className={styles.paragraph_input}>
              <textarea
                style={{ marginBottom: "1px", fontSize: "22px" }}
                rows={5}
                cols={55}
                placeholder="1st line"
                name="paragraph"
                value={paragraph}
                onChange={(e) => setParagraph(e.target.value)}
              ></textarea>
              <button
                className={styles.add_headline_btn}
                onClick={() => addParagraphHandler()}
              >
                Add
              </button>
            </div>
            <div className={styles.paragraphs_container}>
              {paragraphs.length > 0
                ? paragraphs.map((p, i) => (
                    <div>
                      <hr />
                      <span>{p}</span>
                      <button className={styles.edit_headline_btn} onClick={() => {  setHIndex(i);setParagraph(p);}}>
                        Add
                      </button>
                      <button className={styles.edit_headline_btn}
                        onClick={() => {
                          const arr = [...paragraphs];
                          arr.splice(i, 1);
                          setParagraphs(arr);
                        }}
                      >
                        Remove
                      </button>
                      <hr />
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>
        <div className={styles.news_post_titled_para}>
          <input
            type="text"
            style={{ marginBottom: "10px" }}
            placeholder="Sub-Title"
            name="mTitle"
            value={mTitle}
            onChange={(e) => setMTitle(e.target.value)}
          ></input>
          <div className={styles.news_post_para_input}>
            <textarea
              rows={5}
              style={{ marginBottom: "10px", fontSize: "22px" }}
              cols={37}
              placeholder="1st line"
              name="mParagraph"
              value={mParagraph}
              onChange={(e) => setMParagraph(e.target.value)}
            ></textarea>

            <button
              className={styles.add_titled_para_btn}
              onClick={() => addSubTitleHandler()}
            >
              Add Sub-Title
            </button>
          </div>
          <div className={styles.titled_para_container}>
          {titledParagraphs.length > 0
            ? titledParagraphs.map((t, i) => (
                <div style={{ marginBottom: "10px" }}>
                  <hr />
                  <p>{t.title}</p>
                  <span>{t.paragraph}</span>
                  <button className={styles.edit_headline_btn}
                    onClick={() => {
                      setHIndex(i), setMTitle(t.title);
                      setMParagraph(t.paragraph);
                    }}
                  >
                    Edit
                  </button>
                  <button className={styles.edit_headline_btn}
                    onClick={() => {
                      const arr = [...titledParagraphs];
                      arr.splice(i, 1);
                      setTitledParagraphs(arr);
                    }}
                  >
                    Remove
                  </button>
                  <hr />
                </div>
              ))
            : ""}
            </div>
        </div>
      </div>
       
    </>
  );
};

export default NewsPost;
