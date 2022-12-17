import ShowQuizzes from "../components/user/exam/showQuizzes";
import LatestPost from "../components/user/newsPost/latestPost";
export default function Home() {
  return (
    <>
      <LatestPost category="news"></LatestPost>
      <hr/>
      <h3>EDUCATION</h3>
      <LatestPost category="education"></LatestPost>
      <hr/>
      <h3>PRACTICE</h3>
      <ShowQuizzes></ShowQuizzes>
    </>
  );
}
