// "use client";

// import { useState, useCallback, useEffect } from "react";

// import { pdfjs, Document, Page } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css";

// import "./pdf.css";

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;
// // pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
// // pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;


// type PDFFile = string | File | null;

// export default function Sample() {
//     const [file, setFile] = useState<PDFFile>("./sample.pdf");
//     const [numPages, setNumPages] = useState<number>();
//     const [isClient, setIsClient] = useState(false);

//     const onDocumentLoadSuccess = useCallback(
//         ({ numPages }: { numPages: number }) => {
//             setNumPages(numPages);
//         },
//         []
//     );

//     // Ensure the component renders only on the client side
//     useEffect(() => {
//         setIsClient(true); // This ensures we are now in the client-side rendering
//     }, []);

//     // Only render PDF viewer on the client
//     if (!isClient) {
//         // During server-side rendering, return a loading fallback
//         return <div>Loading PDF...</div>;
//     }

//     return (
//         <div className="Example">
//             <div className="Example__container">
//                 <div className="Example__container__document">
//                     <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
//                         {Array.from(new Array(numPages), (_el, index) => (
//                             <Page
//                                 key={`page_${index + 1}`}
//                                 pageNumber={index + 1}
//                             />
//                         ))}
//                     </Document>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React from "react";

export default function Pdf() {

    return(
        <div>pdf</div>
    )
}


