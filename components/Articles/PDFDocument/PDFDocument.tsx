import React from "react";
import styles from "./pdfdocument.module.scss";

interface PDFDocumentProps {
    pdfFile: string;
  }

export default function PDFDocument({pdfFile}: PDFDocumentProps) {

    return (
        <iframe
            // src="sample.pdf#toolbar=0&navpanes=0&scrollbar=0"
            src={pdfFile}
            title="Embedded PDF Viewer, non-downloadable PDF"
            className={styles.pdfDoc}
        ></iframe>
    )
}