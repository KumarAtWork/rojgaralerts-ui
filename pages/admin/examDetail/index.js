import axios from 'axios';
import { useState, useEffect } from 'react';
import AddPassage from '../../../components/admin/passage/addPassage';
import { useRouter } from 'next/router'
import styles from "./examDetail.module.css"
import { SARKAARIEXAMS_HOST } from '../../../constants';


const ExamDetail = () => {

    const [examDetail, setExamDetail] = useState('');
    const [showAddPassage, setAddPassage] = useState(false);
    const [subjectId, setSubjectId] = useState('');
    const [subject, setSubject] = useState('');
    const [loading,setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        axios.get(SARKAARIEXAMS_HOST+'/exams/exam/'+router.query.examId).then(resp => {setExamDetail(resp.data); setLoading(false);}).catch(err => console.log('Error in loading exam detail'));
    }, []);

    const addQuestionHandler  = (id, sub) =>{
      router.push({pathname:'/admin/question/addQuestion', query:{examId:router.query.examId,exam:examDetail.exam,subjectId:id, subject:sub}})
    }

    return (<>
        {!loading && examDetail ? <>
            <div className={styles.exam_detail}>
                <label>Exam:</label><span>{examDetail.exam}</span>
            </div>
            <div className={styles.exam_detail}>
                <label>Type:</label><span>{examDetail.type}</span>
            </div>
            <div className={styles.exam_detail}>
                <label>Year:</label><span>{examDetail.year}</span>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                    {examDetail.subjects.map((s, index) =>
                        <tr>
                            <td onClick={()=>router.push({pathname:'/exam/questions/update',query:{examId:router.query.examId,subjectId:s.id}})}>{s.subject}</td>
                            <td>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <button type="submit" onClick={() => { setAddPassage(true); setSubjectId(s.id); }} className="btn btn-primary">Add Passage</button>
                                    </div>
                                    <div className='col-md-6'> <button type="submit" onClick={() =>addQuestionHandler(s.id,s.subject)} className="btn btn-primary">Add Questions</button>
                                    </div>
                                </div>
                            </td>
                        </tr>)}
                </tbody>
            </table>
            {showAddPassage ? <div className='row'>
                <AddPassage examId={examDetail.id} subjectId={subjectId} />
            </div> : ''}
        </> : <p>Still Loading</p>}
    </>);
}

export default ExamDetail