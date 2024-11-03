import { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import pdf from "/ShakeefAhmedRakin.pdf"; // Ensure the path is correct
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";

export default function ResumeComponent() {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageWidth, setPageWidth] = useState(750); // Default width

  useEffect(() => {
    // Function to update the page width based on the window width
    const handleResize = () => {
      const newWidth = Math.min(window.innerWidth * 0.9, 800); // 90% of the window width or max 800px
      setPageWidth(newWidth);
    };

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize); // Update width on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Function to go to the previous page
  const goToPrevPage = () => {
    setPageNumber((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Function to go to the next page
  const goToNextPage = () => {
    setPageNumber((prevPage) => Math.min(prevPage + 1, numPages));
  };

  return (
    <section
      aria-labelledby="resume-section"
      className="flex justify-center flex-col items-center max-w-[100vw] p-4"
    >
      <h2 id="resume-section" className="sr-only">
        Resume Viewer
      </h2>
      <div className="w-full flex justify-center">
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <div className="flex justify-between items-center w-full mb-4">
            <div className="flex gap-3 items-center">
              <button
                onClick={goToPrevPage}
                disabled={pageNumber <= 1}
                aria-label="Go to previous page"
                className="btn btn-sm md:btn-md bg-primary text-white hover:bg-primary border-none"
              >
                <FaArrowLeft className="text-xs" />
              </button>
              <button
                onClick={goToNextPage}
                disabled={pageNumber >= numPages}
                aria-label="Go to next page"
                className="btn btn-sm md:btn-md bg-primary text-white hover:bg-primary border-none"
              >
                <FaArrowRight className="text-xs" />
              </button>
              {/* Download Button */}
              <a
                href="https://drive.google.com/file/d/1KEX5j0xOPu2IFVyMyHDRlAR04qb7Pauz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-xs md:btn-md bg-transparent text-primary border-none shadow-none hover:underline hover:bg-gray-50 flex items-center"
                aria-label="Download resume"
              >
                <span className="text-xs md:text-base mr-1">Download</span>
                <FaGoogleDrive className="text-xs md:text-lg" />
              </a>
            </div>
            <p className="text-xs md:text-base">
              <span className="text-primary font-medium">{pageNumber}</span> of{" "}
              <span className="text-primary font-medium">{numPages}</span>
            </p>
          </div>
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            width={pageWidth}
          />
        </Document>
      </div>
    </section>
  );
}
