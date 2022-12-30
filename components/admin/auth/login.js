import { useEffect, useState } from "react";
import axios from "axios";
import {setToken,getToken,setUsername,getUsername,setMessage,getMessage} from "../../../store/authDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import styles from "./login.module.css";
import {SARKAARIEXAMS_HOST } from "../../../constants";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const message = useSelector(getMessage);
  const token = useSelector(getToken);
  //const token = undefined;
  let router = useRouter();

  const onClickHandler = () => {
    console.log("Submit button clicked");
    const params = new URLSearchParams();
    params.append("username", userName);
    params.append("password", password);
 
    axios
      .post(SARKAARIEXAMS_HOST+"/login",params)
      .then((response) => {
        if(response.status==200){
          console.log("Login api call is successfull"+response.data);
          dispatch(setToken(response.data.access_token));
          dispatch(setUsername(userName));
        }
        else
        throw err;
      })
      .catch((err) => {
        console.error("Error in calling Login Api"+err);
        dispatch(setMessage(err.message));
      });
  };

  useEffect(() => {
    if (token) {
      axios
        .get(SARKAARIEXAMS_HOST+"/users/user/" + userName, {
          headers: {
            Authorization: token,
          },
        })
        .then((resp) => {
          resp.data.roles.map((r) => {
            if (r.name === "ADMIN_ROLE") setRole("ADMIN_ROLE");
            else setRole("USER_ROLE");
          });
        })
        .catch((err) => {
          console.error("Error in fetching username:" + err);
          setRole("ERROR");
        });
    }
  }, [token]);

  useEffect(() => {
    if (token) router.push("/admin/exams");
    else if (token && role === "USER_ROLE") router.push("/users/exams");
  }, [token]);

  return (
    <>
      <div className={styles.form}>
        <div className={styles.input_container}>
          <input
            type="text"
            onChange={(param) => setUserName(param.target.value)}
            className={styles.username}
            id="userName"
            placeholder="Username"
            autoComplete="off"
          />
        </div>
        <div className={styles.input_container}>
          <input
            type="password"
            onChange={(param) => setPassword(param.target.value)}
            className={styles.password}
            id="password"
            placeholder="Password"
            autoComplete="off"
          />
        </div>
        <div className={styles.submit}>
          <button
            type="submit"
            onClick={() => onClickHandler()}
            className={styles.btn_submit}
          >
            Submit
          </button>
        </div>
        <p>{message}</p>
      </div>
    </>
  );
};

export default Login;
