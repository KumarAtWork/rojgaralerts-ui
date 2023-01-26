import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/"><div className={styles.logo}>
      <p className={styles.slogan}>India's no.1 Jobs Listing site</p>
      <text>RojgarAlerts.In</text>
      </div>
      </Link>
      <input className={styles.menu_btn} type="checkbox" id="menu_btn" />
      <label className={styles.menu_icon} htmlFor="menu_btn">
        <span className={styles.navicon}></span>
      </label>
      <ul className={styles.menu}>
      <li>
          <Link href="/">
            <span>HOME</span>
          </Link>
        </li>
        <li>
          <Link href="https://exams.sarkarimail.com">
            <span>EXAMS</span>
          </Link>
        </li>
        <li>
          <Link href="#results">
            <span>RESULTS</span>
          </Link>
        </li>
        <li>
          <Link href="/aboutUs">
            <span>ABOUT US</span>
          </Link>
        </li>
        <li>
          <Link href="/contactUs">
            <span>CONTACT US</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
