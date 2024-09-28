"use client";

import { useState, useCallback, useEffect } from "react";

import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import "./pdf.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;


type PDFFile = string | File | null;

export default function PDF() {
    const [file, setFile] = useState<PDFFile>("./sample.pdf");
    const [numPages, setNumPages] = useState<number>();

    const onDocumentLoadSuccess = useCallback(
        ({ numPages }: { numPages: number }) => {
            setNumPages(numPages);
        },
        []
    );

    return (
        <div className="Example">
            <div className="Example__container">
                <div className="Example__container__document">
                    <Document 
                    file={file} 
                    loading={"Please wait i am loading"}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={(error) => console.log(error)}
                    >
                        {Array.from(new Array(numPages), (_el, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                renderTextLayer={false}
                                // renderInteractiveForms={false}
                            />
                        ))}
                    </Document>
                </div>
            </div>
        </div>
    );
}

// import React from "react";

// export default function Pdf() {

//     return(
//         <div>pdf</div>
//     )
// }


