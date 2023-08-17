import styles from "./mainContent.module.css";

import { FaLongArrowAltRight, FaTooth } from "react-icons/fa";
import imgHeader from "../../img/imgContent.png";

function MainContent() {
  return (
    <>
      <div className={styles.mainContent}>
        <div className="container">
          <div className={styles.contentBlock}>
            <div className="mt-60">
              <div className="left">
                <div className={styles.leftContentMain}>
                  <div className={styles.title}>
                    <div className={styles.titleHr}>
                      <hr />
                    </div>
                    <h1 className="n-wrap">The Best Health Solution</h1>
                  </div>

                  <h1 className={styles.fs48}>
                    Optional <span className={styles.spnBlue}>Health</span>,
                    <br />
                    One Click Away!
                  </h1>

                  <p className="mt-20 fs-14 fw-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    Suspendisse volutpat posuere neque semper hendrerit.
                  </p>

                  <div className={styles.leftContentMainButtons}>
                    <button className={styles.bookButton}>
                      Book an Appointment
                    </button>

                    <button className={styles.seeWork}>
                      See How We Work
                      <FaLongArrowAltRight
                        size={16}
                        style={{ transform: "rotate(-45deg)" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={imgHeader} alt="" className={styles.imgHeader} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainBlack}>
        <div className={styles.blackContent}>
          <div className={`${styles.mainContent} ${styles.itemCenter}`}>
            <div className={styles.listIcons}>
              <div className={styles.faIcon}>
                <FaTooth size={40} color="#fff" />
                <h1>LogoIpsum</h1>
              </div>
              <div className={styles.faIcon}>
                <FaTooth size={40} color="#fff" />
                <h1>LogoIpsum</h1>
              </div>
              <div className={styles.faIcon}>
                <FaTooth size={40} color="#fff" />
                <h1>LogoIpsum</h1>
              </div>
              <div className={styles.faIcon}>
                <FaTooth size={40} color="#fff" />
                <h1>LogoIpsum</h1>
              </div>
              <div className={styles.faIcon}>
                <FaTooth size={40} color="#fff" />
                <h1>LogoIpsum</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
