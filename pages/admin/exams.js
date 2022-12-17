import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./exams.module.css"
import { SARKAARIEXAMS_HOST } from "../../constants";
const Exams = () => {
  const [exams, setExams] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get(SARKAARIEXAMS_HOST+"/exams")
      .then((resp) => {
        console.log("All exams received successfully");
        setExams(resp.data);
      })
      .catch((err) => console.error(err.message));
  }, []);
  return (
    <>
      <div>
        <button
          onClick={() => router.push('/admin/exam')}
          className={styles.create_exam_btn}
        >
          Create Exam
        </button>
        <button
          onClick={() => router.push('/admin/newsPost')}
          className={styles.create_exam_btn}
        >
          Create News Post
        </button>
      </div>
      <table className={styles.table}>
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
                        router.push({pathname:"/admin/examDetail",query: {
                           examId: e.id 
                          }
                        })
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
export default Exams