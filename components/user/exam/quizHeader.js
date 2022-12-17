import logo from '../../../assets/SarkaariExams-logos_transparent3.png'
import styles from './quizHeader.module.css'
import { Link } from 'react-router-dom'
const QuizHeader = () => {
    return (<>
        <nav className="navbar navbar-light bg-light"> 
                <a className={"navbar-brand" + " " +styles.navbar_custom} href="#">
                    <img src={logo} alt="" className={styles.img} height="100" width="150"></img>
                </a>
                <Link className={"navbar_post"} to={'/post'}>Post
                </Link>   
        </nav>
    </>)
}

export default QuizHeader