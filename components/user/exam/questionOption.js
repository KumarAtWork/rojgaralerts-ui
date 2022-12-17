import styles from "./questionOption.module.css"
const QuestionOption = (props)=>{
    return(<><div className={styles.qstn_option}><button className={props.isChecked?styles.btn_chkd:styles.btn} onClick={props.click}>{props.btn}</button>
    <p className={styles.option}>{props.option}</p>
    </div></>)
}

export default QuestionOption