import { useEffect, useState } from "react";
import { saveNewsPost } from "../../services/service";
import styles from "./newsPost.module.css";
import { useRouter } from "next/router";
import SizedBox from "../../components/sizedBox";
import { getToken,getUsername } from "../../store/authDataSlice";
import { useSelector } from "react-redux";
const NewsPost = () => {
  
  const [title, setTitle] = useState("");
  const [displayTitle, setDisplayTitle] = useState("");
  const [headline, setHeadline] = useState("");
  const [hIndex, setHIndex] = useState(-1);
  const [headlines, setHeadlines] = useState([]);
  const [paragraph, setParagraph] = useState("");
  const [paragraphs, setParagraphs] = useState([]);
  const [titledParagraphs, setTitledParagraphs] = useState([]);
  const [vacancies, setVacancies] = useState([]);
  const [impDates, setImpDates] = useState([]);
  const [impLinks, setImpLinks] = useState([]);
  const [mTitle, setMTitle] = useState("");
  const [mName, setMName] = useState("");
  const [mParagraph, setMParagraph] = useState("");
  const [showVacancies, setShowVacancies] = useState(true);
  const [showImpDates, setShowImpDates] = useState(false);
  const [showImpLinks, setShowImpLinks] = useState(false);
  const [showTitledParagraphs, setShowTitledParagraphs] = useState(false);
  const [category, setCategory] = useState("notification");
  const [state,setState] = useState("--Select State--");
  const [qualification,setQualification] = useState("");
  const router = useRouter();
  const token = useSelector(getToken);
  const username = useSelector(getUsername);
  const [lastDate, setLastDate] = useState();
  const [posts, setPosts] = useState();
  const [board, setBoard] = useState();
  const [impDateTitle,setImpDateTitle] = useState();
  const [impDateValue,setImpDateValue] = useState();
  const [impLinkTitle,setImpLinkTitle] = useState();
  const [impLinkValue,setImpLinkValue] = useState();

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
    setMName("");
    setMParagraph("");
  };
  const addVacancyHandler = () => {
    if (hIndex >= 0) {
      const arr = [...vacancies];
      arr[hIndex] = { title: mTitle, name:mName, paragraph: mParagraph };
      setHIndex(-1);
      setVacancies(arr);
    } else
      setVacancies([...vacancies, { title: mTitle, name:mName,paragraph: mParagraph }]);
    setMTitle("");
    setMName("");
    setMParagraph("");
  };
  const addImpDatesHandler = () => {
    if (hIndex >= 0) {
      const arr = [...impDates];
      arr[hIndex] = { title: impDateTitle,name:impDateValue, paragraph: mParagraph };
      setHIndex(-1);
      setImpDates(arr);
    } else
      setImpDates([...impDates, { title: impDateTitle, name:impDateValue}]);
    setImpDateTitle("");
    setImpDateValue("");
  };
  const addImpLinksHandler = () => {
    if (hIndex >= 0) {
      const arr = [...impLinks];
      arr[hIndex] = { title: impLinkTitle, value:impLinkValue};
      setHIndex(-1);
      setImpLinks(arr);
    } else
      setImpLinks([...impLinks, { title: impLinkTitle, value:impLinkValue}]);
    setImpLinkTitle("");
    setImpLinkValue("");
  };
  const submitNewsPostHandler = async () => {
    console.log("In submit post"+username);
    const data =  await saveNewsPost({
      title: title,
      displayTitle: displayTitle,
      category: category,
      headlines: headlines,
      paragraphs: paragraphs,
      titledParagraphs: titledParagraphs,
      vacancies: vacancies,
      impDates:impDates,
      impLinks:impLinks,
      state:state,
      qualification:qualification,
      lastDate:lastDate,
      posts:posts,
      board:board
    },token,username);
    if (data && data != "Error") {
      console.log('data after saving post:'+data);
      router.push({
        pathname: "/admin/post/upload",
        query: { _id: data },
      });
    } else console.error("Error in saving post:"+data);
  };

  return (
    <>
      <button
        className={styles.submit_news_post_btn}
        onClick={() => submitNewsPostHandler()}
      >
        Submit News Post
      </button>
      <div className={styles.news_post}>
        <div className={styles.news_post_para}>
          <div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="notification">Notifications</option>
              <option value="administrative">UPSC Jobs</option>
              <option value="ssc">SSC Jobs</option>
              <option value="defence">Defence/Police Jobs</option>
              <option value="science">Science/Engineering Jobs</option>
              <option value="healthcare">Healthcare Jobs</option>
              <option value="banking">Banking Jobs</option>
              <option value="teaching">Teaching Jobs</option>
              <option value="railways">Railways Jobs</option>
              <option value="other">Other Jobs</option>
              <option value="results">Results</option>
              <option value="admit">Admit Cards</option>
              <option value="education">Education</option>
            </select>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">--Select State--</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhatisgarh">Chhatisgarh</option>
              <option value="Delhi">Delhi</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Goa">Goa</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu Kashmir">Jammu Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamilnadu">Tamilnadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="West Bengal">West Bengal</option>
            </select>
            <input
              style={{ marginBottom: "10px" }}
              type="text"
              placeholder="Title"
              name="title"
              maxLength="65"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
               <input
              style={{ marginBottom: "10px" }}
              type="text"
              placeholder="Last Date"
              name="lastDate"
              onChange={(e) => setLastDate(e.target.value)}
            ></input>
            <input
              style={{ marginBottom: "10px" }}
              type="text"
              placeholder="Posts"
              name="posts"
              onChange={(e) => setPosts(e.target.value)}
            ></input>
            <input
              style={{ marginBottom: "10px" }}
              type="text"
              placeholder="Job Board"
              name="board"
              onChange={(e) => setBoard(e.target.value)}
            ></input>
            <div className={styles.paragraphs_container}>
              {paragraphs.length > 0
                ? paragraphs.map((p, i) => (
                    <div>
                      <hr />
                      <span>{p}</span>
                      <button
                        className={styles.edit_headline_btn}
                        onClick={() => {
                          setHIndex(i);
                          setParagraph(p);
                        }}
                      >
                        Add
                      </button>
                      <button
                        className={styles.edit_headline_btn}
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
            placeholder="Title / Department"
            name="mTitle"
            value={mTitle}
            onChange={(e) => setMTitle(e.target.value)}
          ></input>
            <input
            type="text"
            style={{ marginBottom: "10px" }}
            placeholder="Seats"
            name="mName"
            value={mName}
            onChange={(e) => setMName(e.target.value)}
          ></input>
          <div className={styles.news_post_para_input}>
            <textarea
              rows={5}
              style={{ marginBottom: "10px", fontSize: "22px" }}
              cols={37}
              placeholder="Qualifications"
              name="mParagraph"
              value={mParagraph}
              onChange={(e) => setMParagraph(e.target.value)}
            ></textarea>

            <button
              className={styles.add_titled_para_btn}
              onClick={() => addVacancyHandler()}
            >
              Set Vacancies
            </button>
            <SizedBox height="16px"></SizedBox>
            <input
            type="text"
            style={{ marginBottom: "10px" }}
            placeholder="Imp. Date Title"
            name="impDateTitle"
            value={impDateTitle}
            list="impDateList"
            onChange={(e) => setImpDateTitle(e.target.value)}
          ></input>
          <datalist id="impDateList">
            <option>Notification Issued On</option>
            <option>Online Application Starts</option>
            <option>Closing of Online Application</option>
          </datalist>
          <SizedBox height="4px"></SizedBox>
            <input
            type="text"
            style={{ marginBottom: "10px" }}
            placeholder="Imp. Date Value"
            name="impDateValue"
            value={impDateValue}
            onChange={(e) => setImpDateValue(e.target.value)}
          ></input>
            <button
              className={styles.add_titled_para_btn}
              onClick={() => addImpDatesHandler()}
            >
              Set Important Dates
            </button>
            <SizedBox height="16px"></SizedBox>
            <input
            type="text"
            style={{ marginBottom: "10px" }}
            placeholder="Imp. Link Title"
            name="impLinkTitle"
            value={impLinkTitle}
            list="impLinkList"
            onChange={(e) => setImpLinkTitle(e.target.value)}
          ></input>
          <datalist id="impLinkList">
            <option>Go To Official Website</option>
            <option>See Official Notification</option>
          </datalist>
          <SizedBox height="4px"></SizedBox>
            <input
            type="text"
            style={{ marginBottom: "10px" }}
            placeholder="Imp. Link Value"
            name="impLinkValue"
            value={impLinkValue}
            onChange={(e) => setImpLinkValue(e.target.value)}
          ></input>
            <button
              className={styles.add_titled_para_btn}
              onClick={() => addImpLinksHandler()}
            >
              Set Important Links
            </button>
          </div>
          <div className={styles.show_btns}>
            <button style={showVacancies?{color:"blue"}:{color:"black"}} onClick={() => setShowVacancies(!showVacancies)}>
              Show Vacancies
            </button>
            <button style={showImpDates?{color:"blue"}:{color:"black"}} onClick={() => setShowImpDates(!showImpDates)}>
              Show Imp. Dates
            </button>
            <button style={showImpLinks?{color:"blue"}:{color:"black"}} onClick={() => setShowImpLinks(!showImpLinks)}>
              Show Imp. Links
            </button>
          </div>
          <div className={styles.titled_para_container}>
            {showVacancies && vacancies.length > 0
              ? vacancies.map((t, i) => (
                  <div style={{ marginBottom: "10px" }}>
                    <hr />
                    <p>{t.title}</p>
                    <p>{t.name}</p>
                    <span>{t.paragraph}</span>
                    <button
                      className={styles.edit_headline_btn}
                      onClick={() => {
                        setHIndex(i), setMTitle(t.title);
                        setMName(t.name);
                        setMParagraph(t.paragraph);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.edit_headline_btn}
                      onClick={() => {
                        const arr = [...vacancies];
                        arr.splice(i, 1);
                        setVacancies(arr);
                      }}
                    >
                      Remove
                    </button>
                    <hr />
                  </div>
                ))
              : ""}
            {showImpDates && impDates.length > 0
              ? impDates.map((t, i) => (
                  <div style={{ marginBottom: "10px" }}>
                    <hr />
                    <p>{t.title}</p>
                    <p>{t.name}</p>
                    <span>{t.paragraph}</span>
                    <button
                      className={styles.edit_headline_btn}
                      onClick={() => {
                        const arr = [...impDates];
                        arr.splice(i, 1);
                        setImpDates(arr);
                      }}
                    >
                      Remove
                    </button>
                    <hr />
                  </div>
                ))
              : ""}
            {showImpLinks && impLinks.length > 0
              ? impLinks.map((t, i) => (
                  <div style={{ marginBottom: "10px" }}>
                    <hr />
                    <p>{t.title}</p>
                    <p>{t.name}</p>
                    <span>{t.paragraph}</span>
                    <button
                      className={styles.edit_headline_btn}
                      onClick={() => {
                        const arr = [...impLinks];
                        arr.splice(i, 1);
                        setImpLinks(arr);
                      }}
                    >
                      Remove
                    </button>
                    <hr />
                  </div>
                ))
              : ""}
            {showTitledParagraphs && titledParagraphs.length > 0
              ? titledParagraphs.map((t, i) => (
                  <div style={{ marginBottom: "10px" }}>
                    <hr />
                    <p>{t.title}</p>
                    <span>{t.paragraph}</span>
                    <button
                      className={styles.edit_headline_btn}
                      onClick={() => {
                        setHIndex(i), setMTitle(t.title);
                        setMName(t.name);
                        setMParagraph(t.paragraph);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.edit_headline_btn}
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
