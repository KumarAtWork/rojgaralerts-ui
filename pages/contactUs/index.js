import { useState } from "react";
import { sendMail } from "../../services/service";
import styles from "./contactus.module.css";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
const Contactus = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [submit, setSubmit] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const sendQueryHandler = async () => {
    if (!executeRecaptcha) {
      return;
    }
    const token = await executeRecaptcha();
    if (!token) {
      setResponse({ message: "Failed to Send!!!", status: "Failed" });
      return;
    }
    setSubmit(true);
    if (email !== "" && subject !== "" && query !== "") {
      console.log('Sending Email');
      const res = await sendMail({
        from: email,
        subject: subject + "--" + name,
        message: query,
        token:token
      });
    setEmail("");
    setName("");
    setQuery("");
    setSubject("");
    setSubmit(false);
    if (res && res != "Error") console.log("Email sent Successfully" + res);
    else if (res) console.error("Error in sending email");
    }
  };

  return (
    <>
      <div className={styles.contact_us_container}>
        <div className={styles.connect_with_us}>
          <p>Connect with us on</p>
          <h3>
            <strong>contact@codefast.tech</strong>
          </h3>
        </div>
        <div className={styles.contact_us}>
          <h2>CONTACT FORM</h2>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <div className={styles.cotact_us_detail}>
            <textarea
              rows={5}
              style={{ marginBottom: "10px", fontSize: "22px" }}
              cols={37}
              placeholder="Your Message"
              name="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            ></textarea>
            <button
              className={styles.send_mail_btn}
              onClick={() => sendQueryHandler()}
              disabled={submit}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
