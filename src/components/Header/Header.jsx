import styles from "./header.module.css";
import { FaClock, FaEnvelope, FaPhone } from "react-icons/fa";

function TopBar() {
  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.topContent}>
            <div className={styles.date}>
              <li>
                <FaClock size={18} /> Sun - Mon 08:00 AM to 18:00
              </li>
            </div>
            <div className={styles.contact}>
              <li>
                <FaEnvelope size={18} />
                exemple@gmail.com
              </li>
              <li>
                <FaPhone size={18} style = {{transform: 'rotate(90deg)' }}/>
                (+55 00)00000-0000
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
