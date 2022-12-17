import { useState, useEffect } from "react"
import {LoadAllExams} from "../../../services/service"
import { useNavigate } from "react-router-dom";


const ShowAllExams = () => {
  const [exams, setExams] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadExams = async () => {
      const data = await LoadAllExams();
      if (data && data !== 'Error')
        setExams(data);
    };
    loadExams();
  }, [])
  return (<>
    <table className='table'>
      <thead>
        <tr>
          <th>Exam</th>
          <th>Type</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {exams.length > 0 && exams.map((e, index) => <tr>
          <td><label>{e.exam}</label></td>
          <td><label>{e.type}</label></td>
          <td><label>{e.year}</label></td>
          <td><label><button className="btn btn-primary" onClick={() => navigate('/quiz-home', { state: { examId: e.id, exam:e.exam } })}>Take a Practice</button></label></td>
        </tr>)
        }
      </tbody>
    </table>
  </>)
}

export default ShowAllExams