import styles from "./post.module.css"
const Post = (props)=>{
    return(<div className={styles.post}>
    <div>
       <div className={styles.post_keywords}>{props.keywords}</div>
        <div className={styles.post_updated}>Updated {props.updated} ago</div>
    </div>    
        
    <div className={styles.post_title}>{props.title}</div>
    <div>
        <div className={styles.post_content_left}>Board : {props.board}</div>
        <div className={styles.post_content_right}>Total Seats : {props.totalSeats}</div>
    </div>
    <div>
      {props.startDate ? <div className={styles.post_content_left}>Start Date : {props.startDate}</div>:<></>}
      {props.lastDate ? <div className={styles.post_content_right}>Last Date : {props.lastDate}</div>:<></>}
    </div>
    {props.qualifications?<div className={styles.post_content_left}>Qualifications : {props.qualifications[0]}</div>:<></>}
    </div>)
}

export default Post