import { pdfjs } from "react-pdf";
import ResumeComponent from "../../Components/ResumeComponent";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Resume() {
  return (
    <main className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28 min-h-[75vh]">
      <h1 className="sr-only">Resume</h1>
      <ResumeComponent />
    </main>
  );
}
