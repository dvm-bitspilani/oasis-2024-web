import styles from "./pdfdocument.module.scss";

interface PDFDocumentProps {
  pdfFile: string;
  title: string;
}

export default function PDFDocument({pdfFile, title}: PDFDocumentProps) {
  const href = pdfFile.replace(/\/preview$/, "/view");
  return <div className={styles.container}>
    <div className={`${styles.pdfDoc} ${styles.documentLink}`}>
      <a href={href} target="_blank" rel="noopener noreferrer">Open {title || "document"}</a>
    </div>
    <h4>{title}</h4>
  </div>;
}
