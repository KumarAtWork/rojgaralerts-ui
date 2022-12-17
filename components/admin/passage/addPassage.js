import { useState } from "react"
import axios from 'axios'
import { getToken } from "../../../store/messageSlice";
import { useSelector } from "react-redux";
import { HOST_IP } from "../../../constants";

const AddPassage = (props) => {
const [passage, setPassage] = useState('');
const [file,setFile] = useState('');

const token = useSelector(getToken);
const formData = new FormData();
formData.append('passage',passage);
formData.append('image',file);

const onClickHandler = () =>{
axios.post(HOST_IP+'/exams/exam/'+props.examId+'/subject/'+props.subjectId+'/passage',formData,{
    headers:{
        'Authorization':token
    }
}).then(resp=>{console.log(resp.data); setPassage('');}).catch(err=>console.error(err.message));
}
return (<>
        <div className="form-group">
            <label htmlFor="passage">Passage</label>
            <textarea row={6} onChange={(param) => setPassage(param.target.value)} className="form-control" id="passage" placeholder="Enter passage Instruction and Details" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleFormControlFile1">Upload Image</label>
            <input type="file" onChange={(e)=>setFile(e.target.files[0])} className="form-control-file" id="exampleFormControlFile1" />
        </div>
        <button type="submit" onClick={()=>onClickHandler()} className="btn btn-primary">Submit</button>
    </>)
}

export default AddPassage