import axios from "axios";
import { NEWSPOST_HOST, SARKAARIEXAMS_HOST } from "../constants";

export const getLatestPost = (category,pageNum) =>
  axios
    .get(NEWSPOST_HOST+'/newsposts/'+category+"?pageNum="+pageNum)
    .then((res) => res.data)
    .catch((err) => "Error");            
export const getHighlightPost = () =>
  axios
    .get(NEWSPOST_HOST+"/newsposts/post/highlight")
    .then((res) => res.data)
    .catch((err) => "Error");
export const getNewsPost = (id) =>
  axios
    .get(NEWSPOST_HOST+"/newsposts/post/" + id)
    .then((res) => res.data)
    .catch((err) => "Error");
export const saveNewsPost = (post) =>
  axios
    .post(NEWSPOST_HOST+"/newsposts/post", post)
    .then((res) => res.data)
    .catch((err) => "Error");
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
        .post(NEWSPOST_HOST+"/newsposts/update",newspost)
        .then((res) => res.data)
        .catch((err) => "Error");      
export const getLatestQuiz = ()=>axios.get(NEWSPOST_HOST+"/quizzes").then(res=>res.data).catch(err=>"Error"); 
export const sendMail = (mail)=>axios.post(NEWSPOST_HOST+"/sendmail",mail).then(res=>res.data).catch(err=>"Error");
