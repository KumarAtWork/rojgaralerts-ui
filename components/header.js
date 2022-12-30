import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/"><div className={styles.logo}>
      <p className={styles.slogan}>India's no.1 Jobs Listing site</p>
      <text>Sarkarimail.com</text>
      </div>
      </Link>
      <input className={styles.menu_btn} type="checkbox" id="menu_btn" />
      <label className={styles.menu_icon} htmlFor="menu_btn">
        <span className={styles.navicon}></span>
      </label>
      <ul className={styles.menu}>
      <li>
          <Link href="#about">
            <span>LATEST JOBS</span>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <span>RESULTS</span>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <span>EDUCATIONS</span>
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
