import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footer_container_main}>
        <div className={styles.footer_rows}>
          <div className={styles.footer_rows_items}>
           <div className={styles.logo_main}>
            <span className={styles.logo_txt}>Sarkarimail.com</span>
            <span className={styles.slogan_txt}>India's no. 1 Job Listing Site</span>
           </div>
          </div>
          <div className={styles.footer_rows_items}>
            <p className={styles.footer_text}><Link href="/">Latest Jobs</Link></p>
            <p className={styles.footer_text}>Results</p>
            <p className={styles.footer_text}>Educations</p>
            <p className={styles.footer_text}><Link href="/contactUs">Contact Us</Link></p>
          </div>
        </div>
        <div className={styles.footer_rows}>
          <div className={styles.footer_rows_items}>
            <p className={styles.footer_text}><Link href="/usages/terms_conditions">Terms And Conditions</Link></p>
            <p className={styles.footer_text}><Link href="/usages/privacy_policy">Privacy Policy</Link></p>
            <p className={styles.footer_text}><Link href="/auth/loginPage">Login as Admin</Link></p>
          </div>
          <div className={styles.footer_rows_items}>
            <p className={styles.footer_text}>Follow Us</p>
            <Image src={"/facebook.svg"} width={30} height={30}></Image>
            <Image src={"/twitters.svg"} width={27} height={27}></Image>
          </div>
        </div>
        </div>
        <hr/>
      <div className={styles.footer_copyright}>
          <p className={styles.footer_text}>Copyright CodeFast Technologies Private Ltd. 2022</p>
      </div>
      </div>
    
    </>
  );
};

export default Footer;
