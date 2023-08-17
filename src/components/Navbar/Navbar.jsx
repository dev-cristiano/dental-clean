import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <h1 className={styles.logo}>Doctor</h1>
          <div className={styles.navContent}>
            <li className={styles.listItems}>
              <a href="#/">Home</a>
            </li>
            <li className={styles.listItems}>
              <a href="#/">Doctors</a>
            </li>
            <li className={styles.listItems}>
              <a href="#/">Services</a>
            </li>
            <li className={styles.listItems}>
              <a href="#/">Appointment</a>
            </li>
            <li className={styles.listItems}>
              <a href="#/">Contact Us</a>
            </li>
          </div>
          <div className={styles.navRight}>
            <div className={styles.signIn}>
              <a href="#/" className={styles.btnSignIn}>
                Sign In
              </a>
            </div>
            <div className={styles.signUp}>
              <button className={styles.btnSignUp}>Sing Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
