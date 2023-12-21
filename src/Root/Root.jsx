import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { Toaster } from "sonner";

const Root = () => {
  return (
    <>
      <Toaster position="bottom-right" />
      <ScrollRestoration></ScrollRestoration>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default Root;
