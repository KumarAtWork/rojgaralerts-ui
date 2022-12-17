import styles from './question.module.css'
import QuestionOption from './questionOption'
import { useState } from 'react'
import { setCurrentIndex } from '../../../store/questionDataSlice'
import { setAnswer, getAllAnswers } from '../../../store/answerDataSlice'
import { useDispatch,useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
const Question = (props)=>{
    const dispatch = useDispatch();
    const getAnswers = useSelector(getAllAnswers);
    const navigate = useNavigate();
    const [optionAChkd,setOptionAChkd] = useState(false);
    const [optionBChkd,setOptionBChkd] = useState(false);
    const [optionCChkd,setOptionCChkd] = useState(false);
    const [optionDChkd,setOptionDChkd] = useState(false);
    const [optionEChkd,setOptionEChkd] = useState(false);
    const onClickHandler = (e) =>{
       switch(e.target.outerText){
         case 'a':optionAChkd?setOptionAChkd(false):setOptionAChkd(true);setOptionBChkd(false);setOptionCChkd(false);setOptionDChkd(false);setOptionEChkd(false);break;
         case 'b':optionBChkd?setOptionBChkd(false):setOptionBChkd(true);setOptionAChkd(false);setOptionCChkd(false);setOptionDChkd(false);setOptionEChkd(false);break;
         case 'c':optionCChkd?setOptionCChkd(false):setOptionCChkd(true);setOptionAChkd(false);setOptionBChkd(false);setOptionDChkd(false);setOptionEChkd(false);break;
         case 'd':optionDChkd?setOptionDChkd(false):setOptionDChkd(true);setOptionAChkd(false);setOptionBChkd(false);setOptionCChkd(false);setOptionEChkd(false);break;
         case 'e':optionEChkd?setOptionEChkd(false):setOptionEChkd(true);setOptionAChkd(false);setOptionBChkd(false);setOptionCChkd(false);setOptionDChkd(false);break;
       }
    }

    const findChosenAnswer = ()=>{
      const arr = [optionAChkd,optionBChkd,optionCChkd,optionDChkd,optionEChkd];
      let answer = '';
      arr.map((e,i)=>{
         switch(i){
            case 0: if(optionAChkd)answer=props.optionA;break;
            case 1: if(optionBChkd)answer=props.optionB;break;
            case 2: if(optionCChkd)answer=props.optionC;break;
            case 3: if(optionDChkd)answer=props.optionD;break;
            case 4: if(optionEChkd)answer=props.optionE;break;
         }
      });
      setOptionAChkd(false);
      setOptionBChkd(false);
      setOptionCChkd(false);
      setOptionDChkd(false);
      setOptionEChkd(false);
      return answer
    }

    return(<>
    <div className={styles.question_options}>
      <div>{props.passage && 'DIRECTIONS: Study the following information carefully and answer the questions given below it'}</div>
      <div>{props.passage && props.passage}</div>
      <div>{props.passage && props.imageUrl && <img src={props.imageUrl} width="300" height="300"></img>}</div>
      <div><p>{props.index+1+". "}{props.question}</p></div>
      <div><QuestionOption btn="a" option={props.optionA} isChecked={optionAChkd} click={onClickHandler}/></div>
      <div><QuestionOption btn="b" option={props.optionB} isChecked={optionBChkd} click={onClickHandler}/></div>
      <div><QuestionOption btn="c" option={props.optionC} isChecked={optionCChkd} click={onClickHandler}/></div>
      <div><QuestionOption btn="d" option={props.optionD} isChecked={optionDChkd} click={onClickHandler}/></div>
      <div><QuestionOption btn="e" option={props.optionE} isChecked={optionEChkd} click={onClickHandler}/></div>
    </div>
    <div>
    <button className={"btn btn-primary" + " "+styles.btn_left} onClick={()=>{dispatch(setCurrentIndex({index:0}));navigate(`/quiz-home`,{state:{examId:props.examId}});dispatch(setAnswer({qstnId:props.questionId,answer:props.answer,chosenAnswer:findChosenAnswer()}))} }>Finish</button>
    <button className={"btn btn-primary" + " "+ styles.btn_right} onClick={()=>{dispatch(setCurrentIndex({index:props.index+1})); dispatch(setAnswer({qstnId:props.questionId,answer:props.answer,chosenAnswer:findChosenAnswer()}))} }>Next</button>
    </div>
    </>)
}
export default Question