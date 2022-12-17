import { useEffect, useState } from "react";
import { getLatestQuiz } from "../../../services/service";
import ShowQuiz from "./showQuiz";
import styles from "./showQuizzes.module.css";
const ShowQuizzes = () => {
  const [loading, setLoading] = useState(true);
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await getLatestQuiz();
      if (result && result !== "Error") {
        setLoading(false);
        setQuizzes(result);
      }
    };
    loadData();
  }, []);
  if (loading) return <>Loading...</>;
  else
    return (
      <>
        <div>
          {!loading && quizzes.map((q) => <ShowQuiz {...q}></ShowQuiz>)}
        </div>
      </>
    );
};

export default ShowQuizzes;
