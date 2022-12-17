import { useEffect, useState } from "react"
import { LoadExamDetail } from "../../../services/service";
import { getToken } from "../../../store/messageSlice";
import { useSelector,useDispatch } from "react-redux";
import { useLocation,useNavigate } from "react-router-dom";
import styles from './quizHome.module.css';
import { setQuiz,getQuiz } from "../../../store/quizHomeDataSlice";
import { setQstns } from "../../../store/questionDataSlice";

const QuizHome = () => {
    const token = useSelector(getToken);
    const location = useLocation();
    const navigate = useNavigate();
    const quiz = useSelector(getQuiz);
    const dispatch = useDispatch();
    useEffect(() => {
        const loadQuizDetails = async () => {

            const data = quiz ? quiz:await LoadExamDetail(location.state.examId);
            if (data && data !== 'Error'){
                // clear questions previous state from store
                dispatch(setQstns([]));
                dispatch(setQuiz(data))
            }
        };
        loadQuizDetails();
    }, []);
    
    //useEffect(()=>{console.log('Quiz home is set');},[quiz])

    return (<>
       <div className="row">
        <div className={styles.quiz_title}>
        <h1>{location.state.exam}</h1>
        </div>
       <div className={styles.quiz_subjects}> 
       {quiz && quiz.subjects.map(s => <button key={s.id} onClick={()=>navigate(`/quiz/start`,{state:{examId:location.state.examId,subjectId:s.id}})} className={"btn btn-primary"+" "+styles.btns_subjects}>{s.subject}</button>)}
       <button className={"btn btn-primary"+" "+styles.btns_subjects}>Go To All Exams</button>
       </div>
       </div>
    </>)
}

export default QuizHome 