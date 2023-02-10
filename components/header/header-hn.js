import styles from "./header.module.css";
import Link from "next/link";

const HeaderHN = () => {
  return (
    <header className={styles.header}>
      <Link href="/"><div className={styles.logo}>
      <p className={styles.slogan}>भारत की नंबर 1 जॉब लिस्टिंग साइट</p>
      <text>रोजगार एलर्ट्स</text>
      </div>
      </Link>
      <input className={styles.menu_btn} type="checkbox" id="menu_btn" />
      <label className={styles.menu_icon} htmlFor="menu_btn">
        <span className={styles.navicon}></span>
      </label>
      <ul className={styles.menu}>
      <li>
          <Link href="/">
            <span>होम</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span>एक्साम्स</span>
          </Link>
        </li>
        <li>
          <Link href="#results">
            <span>रिजल्ट्स</span>
          </Link>
        </li>
        <li>
          <Link href="/aboutUs">
            <span>हमारे बारे में</span>
          </Link>
        </li>
        <li>
          <Link href="/contactUs">
            <span>सम्पर्क करें</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default HeaderHN;
