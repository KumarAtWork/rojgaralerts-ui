import axios from "axios";
import { NEWSPOST_HOST, SARKAARIEXAMS_HOST } from "../constants";
import { getToken,getUsername } from "../store/authDataSlice";
import { useSelector } from "react-redux";



export const getAllLatestPost = (pageNum) =>
  axios
    .get(NEWSPOST_HOST+'/posts/'+"?pageNum="+pageNum)
    .then((res) => res.data)
    .catch((err) => "Error"); 
export const getLatestPost = (category,pageNum) =>
  axios
    .get(NEWSPOST_HOST+'/posts/'+category+"?pageNum="+pageNum)
    .then((res) => res.data)
    .catch((err) => "Error");            
export const getHighlightPost = () =>
  axios
    .get(NEWSPOST_HOST+"/posts/post/highlight")
    .then((res) => res.data)
    .catch((err) => "Error");
export const getNewsPost = (id) =>
  axios
    .get(NEWSPOST_HOST+"/posts/post/" + id)
    .then((res) => res.data)
    .catch((err) => "Error");
export const saveNewsPost = async (post,token,username) =>{
  axios
    .post(NEWSPOST_HOST+"/posts/post",post,{
      headers:{
        'Authorization':token,
        'username':username
      }
    })
    .then(result =>  result.data)
    .catch(error => "Error");
  }
 
  
export const uploadImageForNewsPost = (id, formData,token) =>
    axios
      .post(SARKAARIEXAMS_HOST+"/files/upload/dir/"+id,formData,{
        headers:{
          'Authorization':token
        }
      })
      .then((res) => res.data)
      .catch((err) => "Error");
export const updateNewsPost = (newspost) =>
      axios
        .post(NEWSPOST_HOST+"/posts/update",newspost)
        .then((res) => res.data)
        .catch((err) => "Error");      
export const getLatestQuiz = ()=>axios.get(NEWSPOST_HOST+"/quizzes").then(res=>res.data).catch(err=>"Error"); 
export const sendMail = (mail)=>axios.post(NEWSPOST_HOST+"/sendmail",mail).then(res=>res.data).catch(err=>"Error");
