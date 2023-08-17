import styles from "./theStaff.module.css";
import staff1 from "../../img/staff1.png";
import staff2 from "../../img/staff2.png";
import staff3 from "../../img/staff3.png";
import staff4 from "../../img/staff4.png";

function TheStaff() {
  return (
    <section className={styles.mainContent}>
      <div className="container">
        <div className={styles.staffHeader}>
          <h3 className="fs-22 fs-blue">THE STAFF</h3>
          <h1 className="mt-5 fs-32">Meet our specialists</h1>
        </div>
        <div className={styles.staffContent}>
          <div className={styles.staffCards}>
            <div className={styles.staffCard}>
              <div className={styles.staffCardHeader}>
                <div className={styles.staffImage}>
                  <img src={staff1} />
                </div>
              </div>
              <div className={styles.staffCardBody}>
                <div className={styles.staffCardTitle}>
                  <h1 className="fs-18 fw-sb">Fabio Russo</h1>
                </div>
                <div className={styles.staffCardSubTitle}>
                  <h3 className="fs-16 fw-reg">Chirugo dentale</h3>
                </div>
              </div>
            </div>

            <div className={styles.staffCard}>
              <div className={styles.staffCardHeader}>
                <div className={styles.staffImage}>
                  <img src={staff2} />
                </div>
              </div>
              <div className={styles.staffCardBody}>
                <div className={styles.staffCardTitle}>
                  <h1 className="fs-18 fw-sb">Martina Gallo </h1>
                </div>
                <div className={styles.staffCardSubTitle}>
                  <h3 className="fs-16 fw-reg">Assistant</h3>
                </div>
              </div>
            </div>

            <div className={styles.staffCard}>
              <div className={styles.staffCardHeader}>
                <div className={styles.staffImage}>
                  <img src={staff3} />
                </div>
              </div>
              <div className={styles.staffCardBody}>
                <div className={styles.staffCardTitle}>
                  <h1 className="fs-18 fw-sb">Luca Ferrero</h1>
                </div>
                <div className={styles.staffCardSubTitle}>
                  <h3 className="fs-16 fw-reg">Dental hygienist</h3>
                </div>
              </div>
            </div>

            <div className={styles.staffCard}>
              <div className={styles.staffCardHeader}>
                <div className={styles.staffImage}>
                  <img src={staff4} />
                </div>
              </div>
              <div className={styles.staffCardBody}>
                <div className={styles.staffCardTitle}>
                  <h1 className="fs-18 fw-sb">Giulia Santi</h1>
                </div>
                <div className={styles.staffCardSubTitle}>
                  <h3 className="fs-16 fw-reg">Dental technician</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default TheStaff;
