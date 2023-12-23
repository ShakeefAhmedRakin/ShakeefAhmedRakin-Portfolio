import PageTitle from "../../Components/PageTitle";
import { BiDonateBlood } from "react-icons/bi";
import { MdChevronRight } from "react-icons/md";
import { PiComputerTowerBold } from "react-icons/pi";
import { ImBooks } from "react-icons/im";
import { Link } from "react-router-dom";

const AllProjects = () => {
  return (
    <>
      <PageTitle subtitle={"Projects"} title={"All"}></PageTitle>
      <div className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28 flex flex-col min-h-screen py-10 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* PROJECT  */}
          <Link to={"/bloodbridge"}>
            <div className="relative group shadow-xl rounded-2xl">
              <div className="aspect-video w-full rounded-2xl overflow-hidden">
                <div className="text-background bg-[#d70427] flex items-center gap-1 py-8 rounded-2xl justify-center h-full">
                  <BiDonateBlood className="text-4xl text-background"></BiDonateBlood>
                  <h1 className="font-heading text-xl md:text-4xl font-semibold">
                    BloodBridge
                  </h1>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl duration-300 flex items-center justify-center flex-col cursor-pointer">
                  <p className="text-white text-xs lg:text-base font-text text-center font-medium">
                    Blood Donation Website
                  </p>
                  <div className="mt-2 mb-6">
                    <span className="badge badge-sm lg:badge-md font-text font-bold">
                      MERN
                    </span>
                  </div>
                  <button className="btn btn-sm lg:btn-md bg-transparent font-text text-background hover:bg-background hover:text-primary">
                    Project Details
                    <MdChevronRight className="text-xl"></MdChevronRight>
                  </button>
                </div>
              </div>
            </div>
          </Link>
          {/* PROJECT  */}
          <Link to={"/compharbor"}>
            <div className="relative group shadow-xl rounded-2xl">
              <div className="aspect-video w-full rounded-2xl overflow-hidden">
                <div className="text-background bg-[#38529E] flex items-center gap-1 py-8 rounded-2xl justify-center h-full">
                  <h1 className="font-heading text-xl md:text-4xl font-semibold flex items-center gap-x-1">
                    <PiComputerTowerBold className="text-4xl"></PiComputerTowerBold>
                    Comp Harbor
                  </h1>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl duration-300 flex items-center justify-center flex-col cursor-pointer">
                  <p className="text-white text-xs lg:text-base font-text text-center font-medium">
                    Tech E-Commerce Website
                  </p>
                  <div className="mt-2 mb-6">
                    <span className="badge badge-sm lg:badge-md font-text font-bold">
                      MERN
                    </span>
                  </div>
                  <button className="btn btn-sm lg:btn-md bg-transparent font-text text-background hover:bg-background hover:text-primary">
                    Project Details
                    <MdChevronRight className="text-xl"></MdChevronRight>
                  </button>
                </div>
              </div>
            </div>
          </Link>
          {/* PROJECT  */}
          <Link to={"/topshelf"}>
            <div className="relative group shadow-xl rounded-2xl">
              <div className="aspect-video w-full rounded-2xl overflow-hidden">
                <div className="text-background bg-[#F05454] flex items-center gap-1 py-8 rounded-2xl justify-center h-full">
                  <ImBooks className="text-4xl"></ImBooks>
                  <h1 className="font-heading text-xl md:text-4xl font-semibold">
                    TopShelf
                  </h1>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl duration-300 flex items-center justify-center flex-col cursor-pointer">
                  <p className="text-white text-xs lg:text-base font-text text-center font-medium">
                    Online Library Website
                  </p>
                  <div className="mt-2 mb-6">
                    <span className="badge badge-sm lg:badge-md font-text font-bold">
                      MERN
                    </span>
                  </div>
                  <button className="btn btn-sm lg:btn-md bg-transparent font-text text-background hover:bg-background hover:text-primary">
                    Project Details
                    <MdChevronRight className="text-xl"></MdChevronRight>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AllProjects;
