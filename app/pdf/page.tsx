"use client"

import React, { useState, useCallback } from "react"

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import { Document, Page, pdfjs } from "react-pdf";
import "./pdf.css";
//pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
type PDFFile = string | File | null;

export default function Sample() {
    const [file, setFile] = useState<PDFFile>('/sample.pdf');
    const [numPages, setNumPages] = React.useState(1)
    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    return (
        <div className="Example">
            <div className="Example__container">
                <div className="Example__container__load">
                </div>
                <div className="Example__container__document" >
                    <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                        {Array.from(new Array(numPages), (_el, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                            />
                        ))}
                    </Document>
                </div>
            </div>
        </div>
    );
}