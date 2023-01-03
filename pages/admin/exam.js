import { useState, useEffect } from "react"
import styles from "./exam.module.css"
import { useDispatch, useSelector } from "react-redux"
import { getAllSubjects } from "../../store/subjectSlice"
import { addSubjectRow } from "../../store/subjectSlice"
import LoadSubjectByCount from "../../components/admin/exam/loadSubjectByCount"
import { getAllSubjectValues } from "../../store/subjectValuesSlice"
import { addSubject } from "../../store/subjectValuesSlice"
import { getMessage, setMessage, getToken} from "../../store/authDataSlice"
import axios from "axios"
import { SARKAARIEXAMS_HOST } from "../../constants"



const Exam = () => {
  const dispatch = useDispatch();
  const rows = useSelector(getAllSubjects);
  const [subjectFields, setSubjectFields] = useState(['subject',
    'maxMark',
    'passMark'
  ]); 
  const [exam, setExam] = useState('');
  const [durationInMinutes, setDurationInMinutes] = useState('');
  const [type, setType] = useState('Practice');
  const [year, setYear] = useState('');
  const subjectValues = useSelector(getAllSubjectValues)
  const [isExamSaved, setExamSaved] = useState(false);
  const message = useSelector(getMessage);
  const token = useSelector(getToken);

  const onClickHandler = () => {
    console.log(exam);
    console.log(durationInMinutes);
    console.log(type);
    console.log(year);
    console.log(subjectValues);
    axios.post(SARKAARIEXAMS_HOST+'/exams/exam', {
      exam: exam,
      durationInMinutes: durationInMinutes,
      type: type,
      year: year,
      subjects: subjectValues
    },{
      headers:{
        'Authorization':token
      }
    }).then(resp => dispatch(setMessage(resp.data))).catch(err => dispatch(setMessage(err+' : '+err.message)));
  }

  const onAddMoreSubjectHandler = () => {
    dispatch(addSubjectRow(1));
  }

  const addSubjectValue = (s) => {
    console.log(s);
    dispatch(addSubject(s));
  }
  const onRadioBtnClickHandler = (e)=>{
console.log(">"+e.target.name);
setType(e.target.name);
  }


  return (
    <>
    <div className={styles.exam_form_container}>
        <div className="form-group">
          <input type="text" autoComplete="off" onChange={(param) => setExam(param.target.value)} className="form-control" id="exam" placeholder="Exam Title" />
        </div>
        <div className="form-group">
          <input type="text" autoComplete="off" onChange={(param) => setDurationInMinutes(param.target.value)} className="form-control" id="durationInMinutes" placeholder="Enter Duration In Minutes" />
        </div>
        <div className="form-group"  onClick={() => setType('Practice')}>
          <input type="radio" checked={type==''?true:type=='Practice'}  name="practice"></input>
          <label htmlFor="type">Practice</label>     
        </div>
        <div className="form-group" onClick={() => setType('Mock')}>
          <input type="radio" checked={type==''?false:type=='Mock'}   name="mock"></input>
          <label htmlFor="type">Mock</label>
        </div>
        <div className="form-group">
          <input type="text" autoComplete="off" onChange={(param) => setYear(param.target.value)} className="form-control" id="year" placeholder="year" />
        </div>

        <table className="table" id="subject_table">
          <thead>
            <tr>
              <th scope="col">Subject</th>
              <th scope="col">Maximum Marks</th>
              <th scope="col">Passing Marks</th>
              <th scope="col">More</th>
            </tr>
          </thead>
          <tbody>
            <LoadSubjectByCount values={subjectValues} fields={subjectFields} submitHandler={(e) => addSubjectValue(e)} addMoreClick={() => onAddMoreSubjectHandler()} count={rows} />
          </tbody>
        </table>
       <div className={styles.submit_btn}>
          <button onClick={() => onClickHandler()} className={"btn"+" "+styles.btn}>Submit</button>
       </div>
      <p>{message}</p>
      </div>
    </>
  )
}
export default Exam