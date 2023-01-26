import { useRouter } from "next/router";
import ViewAllPosts from "../../components/user/viewAllPosts/viewAllPosts";
const Posts = ()=>{
    const router = useRouter();
    console.log('Posts param is:'+JSON.stringify(router.query));
    console.log('Posts param :'+JSON.stringify(router));
   return(<>
    <ViewAllPosts {...router.query}></ViewAllPosts>
    </>)
}
export default Posts