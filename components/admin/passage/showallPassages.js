import axios from "axios";
import { useState } from "react"
import { useEffect } from "react"
import { getToken } from "../../../store/messageSlice";
import { useSelector } from "react-redux";
import { HOST_IP } from "../../../constants";


const ShowAllPassages = (props) => {
    const [passages, setPassages] = useState([]);
    const token = useSelector(getToken);
    

    useEffect(() => {
        axios.get(HOST_IP+'/exams/exam/' + props.examId + '/subject/' + props.subjectId + '/passages', {
            headers: {
                'Authorization': token
            }
        }).then(resp => setPassages(resp.data)).catch(err => console.error('Error in retrieving passage :' + err.message));
    }, [])

    return (<>
        {passages.length > 0 ? <div>
            <select onChange={props.handler} className="form-select">
                <option selected>-- Choose Passage / Instruction --</option>
                {passages.map(p =>
                    <option value={JSON.stringify(p)}>{p.passage.substring(0, 70)}</option>
                )}
            </select></div> : <p>No Passage</p>}
    </>)
}

export default ShowAllPassages