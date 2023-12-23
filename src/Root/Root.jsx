import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { Toaster } from "sonner";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
  return (
    <>
      <Toaster position="bottom-right" richColors />
      <ScrollRestoration></ScrollRestoration>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
