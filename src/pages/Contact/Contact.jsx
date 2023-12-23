import ContactMe from "../../Components/ContactMe";

const Contact = () => {
  return (
    <>
      <div className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28 flex flex-col justify-center min-h-screen py-10 md:py-0">
        <h1 className="text-primary text-center font-heading font-bold text-2xl lg:text-5xl tracking-[1px] mb-10">
          GET IN TOUCH
        </h1>
        <ContactMe></ContactMe>
      </div>
    </>
  );
};

export default Contact;
