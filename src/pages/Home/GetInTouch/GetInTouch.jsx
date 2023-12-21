import ContactMe from "../../../Components/ContactMe";

const GetInTouch = () => {
  return (
    <>
      <div className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28">
        <p className="text-secondary text-center font-text text-sm">Contact</p>
        <h1 className="text-primary text-center font-heading font-bold text-2xl lg:text-5xl tracking-[1px] mb-10">
          GET IN TOUCH
        </h1>
        <ContactMe></ContactMe>
      </div>
    </>
  );
};

export default GetInTouch;
