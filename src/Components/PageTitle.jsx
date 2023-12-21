const PageTitle = ({ title, subtitle }) => {
  return (
    <>
      <div className="bg-primary py-5 md:py-16 shadow-xl mb-10">
        <div className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28 text-white">
          <h1 className="font-text">{title}</h1>
          <h1 className="font-heading tracking-[6px] font-thin text-2xl md:text-3xl lg:text-5xl">
            {subtitle}
          </h1>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
