import ContactMe from "../../../Components/ContactMe";

const GetInTouch = () => {
  return (
    <section
      className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28"
      aria-labelledby="get-in-touch-title"
    >
      <h1
        id="get-in-touch-title"
        data-aos="fade-down"
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-head text-center mb-14"
        role="heading"
        aria-level="1"
      >
        Get In Touch<span className="text-primary">.</span>
      </h1>
      <ContactMe />
    </section>
  );
};

export default GetInTouch;
