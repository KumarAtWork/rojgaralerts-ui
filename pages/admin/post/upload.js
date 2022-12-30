import { useEffect, useState } from "react";
import { getNewsPost, updateNewsPost, uploadImageForNewsPost } from "../../../services/service";
import {useRouter} from "next/router";
import { getToken } from "../../../store/authDataSlice";
import { useSelector } from "react-redux";
const SavedPost = () => {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState("");
  const token = useSelector(getToken);
  const router = useRouter();

  useEffect(() => {
    const loadData = async () => {
      const data = await getNewsPost(router.query._id);
      
      if (data && data != "Error") {
        console.log("data from getNewsPost:" + data);
        setPost(data);
        setLoading(false);
      }
    };
    loadData();
  }, [router.query._id]);

  const onFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const onFileUpload = async (id,fieldId) => {
    console.log('file is :'+selectedFile.name)
    const formData = new FormData();
    formData.append("files", selectedFile);
    const data = await uploadImageForNewsPost(id,formData,token);
    if (data != "Error") console.log("Post Image uploaded successfully");
    //calling express server now to update post
    const updatedData = await updateNewsPost({'id':id,'imageName':selectedFile.name, 'fieldId':fieldId});
    if(updatedData!="Error")
    console.log("NewsPost updated successfully");  
  };
  return (
    <>
      {!loading && post ? (
        <div>
          <div>
          <label>Post:{post.title}</label>
          <input type="file" onChange={(e)=>onFileChange(e)}></input>
          <button onClick={()=>onFileUpload(post._id,undefined)}>Upload</button>
          </div>
          {post.titledParagraphs.map((t) => (
            <div>
              <span>Title:{t.title}</span>
              <input type="file" onChange={(e)=>onFileChange(e)}></input>
              <button onClick={()=>onFileUpload(post._id,t._id)}>Upload</button>
            </div>
          ))}
        </div>
      ) : (
        "loading"
      )}
    </>
  );
};

export default SavedPost;
