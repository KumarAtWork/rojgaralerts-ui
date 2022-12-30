import { useState, useEffect } from "react";
import ShowQuestion from "./showQuestion";
import { getToken } from "../../../store/authDataSlice";
import { useSelector } from "react-redux";
import { LoadAllQuestions } from "../../services/service";
import { useLocation } from "react-router-dom";
const EditQuestions = () =>{
    const location = useLocation();
    const [loading,setLoading] = useState(true);
    const [qstns,setQstns] = useState([]);
    const [currentQstn, setCurrentQstn] = useState('');
    const token = useSelector(getToken);
    useEffect(() => {
        const loadAllQuestions = async () => {
            const data = await LoadAllQuestions(location.state.examId,location.state.subjectId,token);
            if (data && data !== 'Error'){
                setQstns(data);
                setLoading(false);
            }
        }
        loadAllQuestions();
    }, []);
return(<>
{!loading && qstns.map(q=><div><ShowQuestion {...q} examId = {location.state.examId} subjectId = {location.state.subjectId}/></div>)}       
      
</>)
}

export default EditQuestions