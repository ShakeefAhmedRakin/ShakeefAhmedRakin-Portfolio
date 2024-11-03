import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { Toaster } from "sonner";
import Footer from "../Shared/Footer/Footer";
import MiniNavBar from "../Shared/MiniNavBar";

const Root = () => {
  return (
    <>
      <Toaster position="bottom-right" richColors />
      <ScrollRestoration></ScrollRestoration>
      <MiniNavBar></MiniNavBar>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
