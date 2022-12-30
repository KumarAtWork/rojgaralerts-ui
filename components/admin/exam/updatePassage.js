import { useState} from "react"
import { updatePassage } from "../../services/service";
import { getToken } from "../../store/authDataSlice";
import { useSelector } from "react-redux";

const UpdatePassage = (props) =>{
    const [file, setFile] = useState('');
    const [passage, setPassage] = useState('');
    const token = useSelector(getToken);
    const formData = new FormData();
    formData.append('passage',passage);
    formData.append('image',file);
    formData.append('passageId',props.passageId);
    const onUpdateHandler = async () =>{
        const data = await updatePassage(props.examId,props.subjectId,formData, token);
        if(data && data !== 'Error')
            console.log('Passage updated')
    }
    return(<>
            <label>Exam ID : {props.examId}</label>
            <label>Subject ID : {props.subjectId}</label>
            <textarea defaultValue={props.passage} onChange={(e)=>setPassage(e.target.value)} rows={8} cols={80}/>
            <input type="file" onChange={(e)=>setFile(e.target.files[0])} className="form-control-file" id="exampleFormControlFile1" />
            <button className="btn btn-primary" onClick={onUpdateHandler}>UPDATE</button>
 </>)
}

export default UpdatePassage