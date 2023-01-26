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
            <span className={styles.logo_txt}>RojgarAlerts.In</span>
            <span className={styles.slogan_txt}>India's no. 1 Job Listing Site</span>
           </div>
          </div>
          <div className={styles.footer_rows_items}>
            <p className={styles.footer_text}><Link href="/">HOME</Link></p>
            <p className={styles.footer_text}>Exams</p>
            <p className={styles.footer_text}>Results</p>
            <p className={styles.footer_text}><Link href="/aboutUs">About Us</Link></p>
            
          </div>
        </div>
        <div className={styles.footer_rows}>
          <div className={styles.footer_rows_items}>
            <p className={styles.footer_text}><Link href="/contactUs">Contact Us</Link></p>
            <p className={styles.footer_text}><Link href="/usages/terms_conditions">Terms And Conditions</Link></p>
            <p className={styles.footer_text}><Link href="/usages/privacy_policy">Privacy Policy</Link></p>
            <p className={styles.footer_text}><Link href="/auth/loginPage">Login as Admin</Link></p>
          </div>
          <div className={styles.footer_rows_items}>
            <p className={styles.footer_text}>Follow Us</p>
            <div className={styles.social_medias}>              
            <Image src={"/facebook.svg"} width={30} height={30}></Image>
            <Image src={"/twitters.svg"} width={27} height={27}></Image>
              </div>
          </div>
        </div>
        </div>
        <hr/>
      <div className={styles.footer_copyright}>
          <p className={styles.footer_text}>Copyright <a href="https://nextexams.in" target="blank">NextExams</a> 2023 All Rights Reserved</p>
      </div>
      </div>
    
    </>
  );
};

export default Footer;
