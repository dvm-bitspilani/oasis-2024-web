"use client"

import React, { useState, useCallback } from "react"

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import { Document, Page, pdfjs } from "react-pdf";
import "./pdf.css";
import PrePreloader from "@/components/PreloaderProMax/PreloaderProMax";

//pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

type PDFFile = string | File | null;

export default function Pdf() {
    const [file, setFile] = useState<PDFFile>('/sample.pdf');
    const [numPages, setNumPages] = React.useState(1)
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    //     setNumPages(numPages);
    // }

    const onDocumentLoadSuccess = useCallback(
        ({ numPages }: { numPages: number }) => {
            setNumPages(numPages);
            setIsLoading(false);
        },
        []
    );

    return (
        <div className="Example">
            {isLoading && (
                <div className="Example__loader">
                    <PrePreloader />
                </div>
            )}
            <div className="Example__container">
                <div className="Example__container__load">
                </div>
                <div className="Example__container__document" >
                    <Document
                        file={file}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={() => setIsLoading(false)}
                    >
                        {Array.from(new Array(numPages), (_el, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                            />
                        ))}
                    </Document>
                </div>
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
    );
}