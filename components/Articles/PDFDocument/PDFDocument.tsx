import React from "react";
import styles from "./pdfdocument.module.scss";

interface PDFDocumentProps {
    pdfFile: string;
    title: string,
}

export default function PDFDocument({ pdfFile, title }: PDFDocumentProps) {

    return (
        <div className={styles.container}>
            <iframe
                // src="sample.pdf#toolbar=0&navpanes=0&scrollbar=0"
                src={pdfFile}
                // title="Embedded PDF Viewer, non-downloadable PDF"
                className={styles.pdfDoc}
                allow="autoplay"
            ></iframe>
            <h4>{title}</h4>
        </div>
    )
}