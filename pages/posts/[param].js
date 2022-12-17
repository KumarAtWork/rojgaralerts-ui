import { useRouter } from "next/router";
import ViewAllPosts from "../../components/user/viewAllPosts/viewAllPosts";
const Posts = ()=>{
    const router = useRouter();
    console.log('Posts param is:'+JSON.stringify(router.query));
    return(<>
    <ViewAllPosts {...router.query}></ViewAllPosts>
    </>)
}
export default Posts