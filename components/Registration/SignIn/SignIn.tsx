import React, { useState } from "react";
import styles from "./signin.module.scss";
import Instruction from "../Instructions/Instructions";
import Modal from "../Modal/Modal";

const Signin = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleModal = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.titlecontainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="19"
            viewBox="0 0 28 19"
            fill="none"
          >
            <path
              d="M10.3759 3.98687C12.1824 6.40657 15.2939 7.02372 16.699 6.97627C13.688 5.26799 12.6828 3.94617 13.0858 2.42104C13.3868 1.28189 15.7455 1.47202 17.0001 1.70928C15.9463 0.855164 13.3869 -0.6253 11.5803 0.285755C9.77368 1.19681 9.73795 3.13247 10.3759 3.98687Z"
              fill="#F7DB94"
            />
            <path
              d="M17.0003 9.02723V9.02846V10.6016C14.7851 10.3917 9.86022 10.9795 7.88199 15.01L5.87286 13.1207L7.10925 11.7037C7.31531 11.074 7.35653 10.0034 5.87286 10.7591L4.94556 11.7037C4.12164 11.0218 1.97997 9.53225 0.00240995 9.02784C1.97997 8.52343 4.12164 7.03392 4.94556 6.35195L5.87286 7.2966C7.35653 8.05232 7.31531 6.98171 7.10925 6.35195L5.87286 4.93497L7.88199 3.04567C9.86022 7.07618 14.7851 7.66396 17.0003 7.45404V9.02723Z"
              fill="#FAE29F"
            />
            <path
              d="M10.3759 14.443C12.1824 11.6776 15.2939 10.9723 16.699 11.0265C13.688 12.9788 12.6828 14.4895 13.0858 16.2325C13.3868 17.5344 15.7455 17.3171 17.0001 17.0459C15.9463 18.0221 13.3869 19.714 11.5803 18.6728C9.77368 17.6316 9.73795 15.4194 10.3759 14.443Z"
              fill="#F7DB94"
            />
            <path
              d="M18.001 9.02726V9.02842V15.01H20.001V9.02842V9.02726V3.04567H18.001V9.02726Z"
              fill="#F8DC96"
            />
            <path
              d="M22 9.03099V9.03234V10.5918C22.7692 10.7074 24.677 11.3549 26.1539 13.0198C26.1026 12.5573 25.9385 11.5283 25.6924 11.1121L27.9994 9.03166L25.6924 6.95123C25.9385 6.53501 26.1026 5.50602 26.1539 5.04355C24.677 6.70844 22.7692 7.35589 22 7.47151V9.03099Z"
              fill="#F7DB94"
            />
          </svg>
          <div className={styles.title}>instructions</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="19"
            viewBox="0 0 28 19"
            fill="none"
          >
            <path
              d="M17.6244 3.98662C15.8178 6.40633 12.7064 7.02348 11.3012 6.97602C14.3122 5.26775 15.3174 3.94592 14.9144 2.4208C14.6134 1.28164 12.2547 1.47178 11.0001 1.70903C12.054 0.85492 14.6133 -0.625545 16.4199 0.285511C18.2266 1.19657 18.2623 3.13222 17.6244 3.98662Z"
              fill="#F7DB94"
            />
            <path
              d="M10.9999 9.02698V9.02821V10.6014C13.2151 10.3915 18.14 10.9793 20.1183 15.0098L22.1274 13.1205L20.891 11.7035C20.6849 11.0737 20.6437 10.0031 22.1274 10.7588L23.0547 11.7035C23.8786 11.0215 26.0203 9.53201 27.9978 9.0276C26.0203 8.52319 23.8786 7.03367 23.0547 6.3517L22.1274 7.29635C20.6437 8.05207 20.6849 6.98147 20.891 6.3517L22.1274 4.93473L20.1183 3.04543C18.14 7.07593 13.2151 7.66372 10.9999 7.45379V9.02698Z"
              fill="#FAE29F"
            />
            <path
              d="M17.6244 14.4427C15.8178 11.6774 12.7064 10.9721 11.3012 11.0263C14.3122 12.9786 15.3174 14.4893 14.9144 16.2323C14.6134 17.5342 12.2547 17.3168 11.0001 17.0457C12.054 18.0218 14.6133 19.7138 16.4199 18.6726C18.2266 17.6314 18.2623 15.4192 17.6244 14.4427Z"
              fill="#F7DB94"
            />
            <path
              d="M9.99927 9.02701V9.02818V15.0098H7.99923V9.02818V9.02701V3.04543H9.99927V9.02701Z"
              fill="#F8DC96"
            />
            <path
              d="M6.00024 9.03074V9.0321V10.5916C5.231 10.7072 3.32327 11.3546 1.84632 13.0195C1.8976 12.5571 2.06171 11.5281 2.30787 11.1118L0.000883579 9.03142L2.30787 6.95099C2.06171 6.53477 1.8976 5.50577 1.84632 5.04331C3.32327 6.70819 5.231 7.35565 6.00024 7.47127V9.03074Z"
              fill="#F7DB94"
            />
          </svg>
        </div>
        <div className={styles.contentcontainer}>
          <Instruction text="Complete the registration form with all required details. You'll be able to login through your registered email id when required." />
          <div className={styles.two}>
            <Instruction text="All team members are required to register separately." />
          </div>
          <Instruction text="A College Representative (CR) will be appointed for each college who'll be responsible for allotting heads for all the societies the college will be participating for." />
          <div className={styles.mobilecontent}>
            <Instruction text="Complete the registration form with all required details. You'll be able to login through your registered email id when required. All team members are required to register separately." />
            {/* <Instruction text="⁠A College Representative (CR) will be appointed for each college who'll be responsible for allotting heads for all the societies the college will be participating for." /> */}
            <Instruction text="Heads will then have to form the team and lock it." />
            <Instruction text="After the teams are locked, an approval email will be sent from the Department of Publication and Correspondence." />
            <Instruction text="Make the required payment as instructed." />
            <Instruction text="Upon successful payment, a confirmation email will be sent." />
          </div>
          <div className={styles.two}>
            <Instruction text="For further details contact:" />
          </div>
          <div className={styles.contact}>
            <div className={styles.content}>
              <div className={styles.text}>Parimal: 8638304074</div>
            </div>
            <div className={styles.content}>
              <div className={styles.text}>Ishita: 7804051996</div>
            </div>
          </div>

          <div className={styles.two}>
            <div className={styles.details}>
              <Instruction text="For detailed instructions" />
              <div className={styles.modalbtn} onClick={toggleModal}>
                click here
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.modal}>
        {isOpen && <Modal closeModal={toggleModal} />}
      </div>
    </>
  );
};

export default Signin;
