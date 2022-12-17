import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/logo.png"
          width={110}
          height={55}
        ></Image>
      </Link>
      <input className={styles.menu_btn} type="checkbox" id="menu_btn" />
      <label className={styles.menu_icon} htmlFor="menu_btn">
        <span className={styles.navicon}></span>
      </label>
      <ul className={styles.menu}>
        <li>
          <Link href="/">
            <span>LATEST POST</span>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <span>PRACTICE ONLINE</span>
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
