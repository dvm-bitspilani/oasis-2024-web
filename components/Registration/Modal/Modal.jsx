import React from "react";
import styles from "./modal.module.scss";
import Instruction from "../Instructions/Instructions";

const Modal = ({ closeModal }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.grunge}></div>
        <button className={styles.closeButton} onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M24 8L8 24"
              stroke="#FAE29F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 8L24 24"
              stroke="#FAE29F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div className={styles.title}>detailed instructions</div>
        <div className={styles.content}>
          <Instruction text="Complete the registration form with all required details. You'll be able to login through your registered email id when required. All team members are required to register separately." />
          <Instruction text="⁠⁠A College Representative (CR) will be appointed for each college who'll be responsible for allotting heads for all the societies the college will be participating for." />
          <Instruction text="⁠The heads and CR will be responsible for approving the other participating members." />
          <Instruction text=" ⁠After this, an approval email will be sent from the Department of Publication and Correspondence." />
          <Instruction text=" ⁠Make the required payment as instructed" />
          <Instruction text="⁠Upon successful payment, a confirmation email will be sent." />
        </div>
      </div>
    </div>
  );
};

export default Modal;
