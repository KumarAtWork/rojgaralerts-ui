import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SARKAARIEXAMS_HOST } from "../../../constants";

export const AllExams = () => {
  const [exams, setExams] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(SARKAARIEXAMS_HOST + "/exams")
      .then((resp) => {
        console.log("All exams received successfully");
        setExams(resp.data);
      })
      .catch((err) => console.error(err.message));
  }, []);
  return (
    <>
      <div className="row">
        <button onClick={() => navigate(`/exam`)} className="btn btn-primary">
          Create Exam
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Exam</th>
            <th>Type</th>
            <th>Year</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {exams.length > 0 &&
            exams.map((e, index) => (
              <tr>
                <td>
                  <label>{e.exam}</label>
                </td>
                <td>
                  <label>{e.type}</label>
                </td>
                <td>
                  <label>{e.year}</label>
                </td>
                <td>
                  <label>
                    <button
                      onClick={() =>
                        navigate("/exam-details", { state: { examId: e.id } })
                      }
                    >
                      Edit
                    </button>
                  </label>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
