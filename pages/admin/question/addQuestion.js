import axios from "axios";
import { useState } from "react"
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getToken } from "../../../store/authDataSlice";
import ShowAllPassages from "../../../components/admin/passage/showallPassages";
import styles from "./addQuestion.module.css";
import { HOST_IP } from "../../../constants";

const AddQuestion = (props) => {
    const router = useRouter();
    console.log('state--'+router.query.examId);
    const token = useSelector(getToken);
    const [question, setQuestion] = useState('');
    const [optionA, setOptionA] = useState('');
    const [optionB, setOptionB] = useState('');
    const [optionC, setOptionC] = useState('');
    const [optionD, setOptionD] = useState('');
    const [optionE, setOptionE] = useState('');
    const [answer, setAnswer] = useState('');
    const [mark, setMark] = useState(0);
    const [choiceType, setChoiceType] = useState('');
    const [message, setMessage] = useState('');
    const [passage, setPassage] = useState('');
    const onSelectHandler = (e) =>{
        console.log('inside onSelectHandler');
        const psg = JSON.parse(e.target.value);
         if(psg.id && psg.passage)
            setPassage(psg);
            else{
               console.log('Wrong Passage');
               setPassage('');
            }
    }
    const onSubmitHandler = () =>{
        axios.post(HOST_IP+'/exams/exam/'+router.query.examId+'/subject/'+router.query.subjectId+'/questions/question',{
            passageId:passage?passage.id:null,
            question:question,
            optionA:optionA,
            optionB:optionB,
            optionC:optionC,
            optionD:optionD,
            optionE:optionE,
            answer:answer,
            mark:mark,
            choiceType:choiceType
        },{
            headers:{
                'Authorization': token
            }
        }).then(resp=>{console.log('question saved successfully'+resp.data); clearForm();setMessage('Question saved Successfully');}).catch(err=>console.error('Error in saving question'+err.message));
    }
    const clearForm = () =>{
        setQuestion('');
        setOptionA('');
        setOptionB('');
        setOptionC('');
        setOptionD('');
        setOptionE('');
        setAnswer('');
        setMark(0);
        setChoiceType('');
    }
    return (<>
        <div className="row">
            <div className="col-6">
                <div className="form-group">
                    <label htmlFor="exam">Exam</label>
                    <input type="text" readOnly={true} autoComplete="off" value={router.query.exam} className="form-control" id="exam" />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" readOnly={true} autoComplete="off" value={router.query.subject} className="form-control" id="subject" />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Passage / Instruction</label>
                    <ShowAllPassages examId={router.query.examId} subjectId={router.query.subjectId} handler = {(e)=>onSelectHandler(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="passage">Passage</label>
                    <textarea rows={16}  value={passage.passage} autoComplete="off" readOnly={true} className="form-control" id="passage" />
                </div>
            </div>
            <div className="col-6">
                <div className="form-group">
                    <label htmlFor="question">Question</label>
                    <textarea rows={3} value={question} autoComplete="off" onChange={(param) => setQuestion(param.target.value)} className="form-control" id="exam" placeholder="Enter Question" />
                </div>
                <div className="form-group">
                    <label htmlFor="optionA">Option A</label>
                    <input type="text" value={optionA} autoComplete="off" onChange={(param) => setOptionA(param.target.value)} className="form-control" id="optionA" placeholder="Enter option A" />
                </div>
                <div className="form-group">
                    <label htmlFor="optionB">Option B</label>
                    <input type="text" value={optionB} autoComplete="off" onChange={(param) => setOptionB(param.target.value)} className="form-control" id="optionB" placeholder="Enter option B" />
                </div>
                <div className="form-group">
                    <label htmlFor="optionC">Option C</label>
                    <input type="text" value={optionC} autoComplete="off" onChange={(param) => setOptionC(param.target.value)} className="form-control" id="optionC" placeholder="Enter option C" />
                </div>
                <div className="form-group">
                    <label htmlFor="optionD">Option D</label>
                    <input type="text" value={optionD} autoComplete="off" onChange={(param) => setOptionD(param.target.value)} className="form-control" id="optionD" placeholder="Enter option D" />
                </div>
                <div className="form-group">
                    <label htmlFor="optionE">Option E</label>
                    <input type="text" value={optionE} autoComplete="off" onChange={(param) => setOptionE(param.target.value)} className="form-control" id="optionE" placeholder="Enter option E" />
                </div>
                <div className="form-group">
                    <label htmlFor="answer">Answer</label>
                    <input type="text" value={answer} autoComplete="off" onChange={(param) => setAnswer(param.target.value)} className="form-control" id="answer" placeholder="Enter answer" />
                </div>
                <div className="form-group">
                    <label htmlFor="mark">Mark</label>
                    <input type="text" value={mark} autoComplete="off" onChange={(param) => setMark(parseInt(param.target.value))} className="form-control" id="mark" placeholder="Enter mark" />
                </div>
                <div className="form-group">
                    <label htmlFor="choice">Choice Type</label>
                    <input type="text" value={choiceType} autoComplete="off" onChange={(param) => setChoiceType(param.target.value)} className="form-control" id="choiceType" placeholder="Enter Choice Type" />
                </div>
                <div className={"form-group" + " " +styles.submit_btn_msg}>
                    <button type="submit" onClick={()=>onSubmitHandler()} className="btn btn-primary">Submit</button>
                    
                </div>
                <div>
                <p>{message?message:''}</p>
                </div>
            </div>
        </div>
    </>)
}

export default AddQuestion