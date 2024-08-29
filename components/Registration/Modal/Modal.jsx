import React from "react";
import styles from "./modal.module.scss";
import Instruction from "../Instructions/Instructions";

const Modal = ({ closeModal }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={closeModal}>
          X
        </button>
        <div className={styles.title}>detailed instructions</div>
        <div className={styles.content}>
          <Instruction text="Complete the registration form with all required details. You'll be able to login through your registered email id when required. All team members are required to register separately." />
          <Instruction text="⁠A College Representative (CR) will be appointed for each college who'll be responsible for allotting heads for all the societies the college will be participating for." />
          <Instruction text="Heads will then have to form the team and lock it." />
          <Instruction text="After the teams are locked, an approval email will be sent from the Department of Publication and Correspondence." />
          <Instruction text="Make the required payment as instructed." />
          <Instruction text="Upon successful payment, a confirmation email will be sent." />
        </div>
      </div>
    </div>
  );
};

export default Modal;
