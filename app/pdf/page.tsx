"use client";

import { useState, useCallback } from "react";

import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import "./pdf.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;


const maxWidth = 800;

type PDFFile = string | File | null;

export default function Sample() {
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
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {Array.from(new Array(numPages), (_el, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                            />
                        ))}
                    </Document>
                    {/* <iframe
                    src="sample.pdf#toolbar=0&navpanes=0&scrollbar=0"
                    // width="100%"
                    title="Embedded PDF Viewer, non-downloadable PDF"
                    className="view"
                ></iframe> */}
                    {/* <iframe
                    src="https://drive.google.com/file/d/1epMPX3r90rrt6Sa0TEsWfDEG8XO5WCz4/preview"
                    allow="autoplay"
                ></iframe> */}
                </div>
            </div>
        </div>
    );
}

