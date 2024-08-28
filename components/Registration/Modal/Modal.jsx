import React from "react";
import styles from "./modal.module.scss";

const Modal = ({ closeModal }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={closeModal}>
          X
        </button>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, enim pariatur fugit ipsa aspernatur consequatur dicta, magni dolores iste cumque repudiandae asperiores. Itaque, distinctio provident voluptas consectetur ea qui quibusdam delectus consequuntur tempore, maiores aliquid dolorem ipsum consequatur excepturi nihil earum enim, saepe possimus ex laudantium ipsam voluptatum pariatur? Illo blanditiis delectus cumque magnam saepe laboriosam! Asperiores iste saepe voluptate, unde facilis sit. Quod animi itaque blanditiis, soluta dolores laborum est nam accusamus ducimus iusto consectetur enim nihil sequi dolore a dolorem id, magnam eligendi harum, commodi hic sed! Nihil eius minus repellendus iste nulla magni, veniam modi! Tempore, ab.
        </p>
      </div>
    </div>
  );
};

export default Modal;
