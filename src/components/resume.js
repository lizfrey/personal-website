import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../assets/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  return (
    <Document file={resume}>
      <Page pageNumber={1} />
    </Document>
  );
}

export default Resume;
