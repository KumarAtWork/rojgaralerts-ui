import { useEffect, useState } from "react"
import { LoadAllQuestions } from "../../../services/service";
import { useSelector ,useDispatch} from "react-redux/es/exports";
import { getToken } from "../../../store/messageSlice";
import { useLocation,useNavigate } from "react-router-dom";
import Question from "./question";
import styles from "./startQuiz.module.css"
import { getQstn, setQstns , getCurrentIndex, setCurrentIndex} from "../../../store/questionDataSlice";

const StartQuiz = () => {
    const token = useSelector(getToken);
    const location = useLocation();
    const dispatch = useDispatch();
    const currentQuestion = useSelector(getQstn);
    const index = useSelector(getCurrentIndex);
    const navigate = useNavigate(); 
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        const loadAllQuestions = async () => {
            const data = await LoadAllQuestions(location.state.examId,location.state.subjectId,token);
            if (data && data !== 'Error'){
                dispatch(setQstns(data));
                setLoading(false);
            }
        }
        loadAllQuestions();
    }, []);
  //  useEffect(()=>{console.log('Question changed'+currentQuestion); },[currentQuestion])

    return (<>
    {!loading && currentQuestion &&<div className={styles.question}><Question {...currentQuestion} examId={location.state.examId} index={index}/></div>}       
         {!loading && (currentQuestion === undefined || currentQuestion === null) && index>0 && <div className={styles.question +" "+styles.question_finished}><p >You have finished this module</p><button className="btn btn-primary" onClick={()=>{dispatch(setCurrentIndex({index:0}));navigate(`/quiz-home`,{state:{examId:location.state.examId}})}}>Go to Home</button></div>}
   </>)
}

export default StartQuiz