import QuestionOption from "../user/exam/questionOption";
import Popup from "reactjs-popup";
import styles from "./showQuestion.module.css"
import UpdatePassage from "./updatePassage";
import UpdateQuestion from "./updateQuestion";
import { useState } from "react";

const ShowQuestion = (props) => {
  const [showUpdatePassage, setShowUpdatePassage] = useState(false);
  const [showUpdateQuestion, setShowUpdateQuestion] = useState(false);
  const onUpdateHandler = () =>{
   
  }

  return (<>
  <div className="row">
  <div className="col-6">
  <div className={styles.show_question}>
    <div>{props.passage && 'DIRECTIONS: Study the following information carefully and answer the questions given below it'}</div>
    <div className={styles.show_question_passage_txt}>
      <div className={styles.show_question_passage}>{props.passage}</div>
      <div className={styles.show_question_edit_btn}>
        {props.passage && <button className="btn btn-link" onClick={()=>{setShowUpdatePassage(true); setShowUpdateQuestion(false);}}>Edit</button>} 
      </div>
    </div>
    <div>{props.passage && props.imageUrl && <img src={props.imageUrl} width="300" height="300"></img>}</div>
    <div className={styles.question}>
      <div className={styles.show_question_passage}>
        <div>{props.questionId + ". "}{props.question}</div>
        <div><QuestionOption btn="a" option={props.optionA} /></div>
        <div><QuestionOption btn="b" option={props.optionB} /></div>
        <div><QuestionOption btn="c" option={props.optionC} /></div>
        <div><QuestionOption btn="d" option={props.optionD} /></div>
        <div><QuestionOption btn="e" option={props.optionE} /></div>
      </div>
      <div className={styles.show_question_edit_btn}>
       {props.question && <button className="btn btn-link" onClick={()=>{setShowUpdatePassage(false); setShowUpdateQuestion(true);}}>Edit</button>}
      </div>
    </div>
  </div>
  </div>
  <div className="col-6">
  {showUpdatePassage? <UpdatePassage examId={props.examId} subjectId={props.subjectId} passageId={props.passageId} passage={props.passage}/>:''}
  {showUpdateQuestion ? <UpdateQuestion question={props.question} optionA={props.optionA} optionB={props.optionB} optionC={props.optionC} optionD={props.optionD} optionE={props.optionE}></UpdateQuestion>:''}
  </div>
  </div>
  </>
  )
}

export default ShowQuestion