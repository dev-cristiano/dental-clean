import styles from "./ourStudio.module.css";
import imgOur from "../../img/imgOur.png";

import { FaRegClock, FaListUl } from "react-icons/fa";

function OurStudio() {
  return (
    <section className={styles.mainContent}>
      <div className="container">
        <div className={styles.ourContent}>
          <div className="left">
            <div className={styles.ourContentTop}>
              <div className={styles.ourHeader}>
                <span className={`${styles.spnBlue} fs-48 ft-bold`}>
                  Our Studio
                </span>
                <p className="fs-14 mt-20">
                  DentalCare is the first Italian private healthcare company to
                  have 3 ISO Certifications in Quality, Environment and Safety:
                  the quality of the services offered to patients is certified
                  by third parties and innovation and training play a
                  fundamental role in the development of the profession.
                </p>
              </div>
              <div className={styles.ourBody}>
                <div className={styles.card}>
                  <div className={styles.cardLogo}>
                    <FaRegClock size={36} />
                  </div>
                  <div className={styles.cardText}>
                    <h4>Full schedules for everyone</h4>
                    <p className="fs-14">
                      The DentalPro Centers are open from 9 am to 8 pm all day.
                    </p>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardLogo}>
                    <FaListUl size={36} />
                  </div>
                  <div className={styles.cardText}>
                    <h4>Payment deferments</h4>
                    <p className="fs-14">
                      DentalCare offers a customized payment plan. <br />
                      The patient health must always be our first goal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className={styles.contentImage}>
              <img src={imgOur} alt="" className={styles.imgOur} />
            </div>
          </div>
        </div>
        <div className={styles.cardCounts}>
          <div className={styles.cardCount}>
            <div className={styles.cardTitle}>
              <h1>1783+</h1>
              <div className={styles.cardSubTitle}>
                <p className="fs-14">Happy patients</p>
              </div>
            </div>
          </div>
          <div className={styles.cardCount}>
            <div className={styles.cardTitle}>
              <h1>730+</h1>
              <div className={styles.cardSubTitle}>
                <p className="fs-14">Online dating</p>
              </div>
            </div>
          </div>
          <div className={styles.cardCount}>
            <div className={styles.cardTitle}>
              <h1>15+</h1>
              <div className={styles.cardSubTitle}>
                <p className="fs-14">Premi ottenuti </p>
              </div>
            </div>
          </div>
          <div className={styles.cardCount}>
            <div className={styles.cardTitle}>
              <h1>7+</h1>
              <div className={styles.cardSubTitle}>
                <p className="fs-14"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OurStudio;
