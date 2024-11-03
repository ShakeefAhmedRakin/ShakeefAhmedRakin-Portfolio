const Education = () => {
  return (
    <div className="space-y-2">
      {/* BRAC University */}
      <div
        className="shadow p-4 rounded-xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="">
          <h1 className="font-bold text-sm md:text-lg">
            Bachelor of Science in Computer Science and Engineering
          </h1>
          <hr className="border-[#DF131C] border-[1px] w-1/4" />
          <h2 className="text-xs md:text-sm italic">BRAC University</h2>
          <h3 className="text-[10px] md:text-xs italic">May 2020 - May 2024</h3>
        </div>
      </div>
      {/* A Levels */}
      <div
        className="shadow p-4 rounded-xl"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="">
          <h1 className="font-bold text-sm md:text-lg">
            Cambridge International A Levels
          </h1>
          <hr className="border-[#0BAA8C] border-[1px] w-1/4" />
          <h2 className="text-xs md:text-sm italic">
            June 2018 – November 2019
          </h2>
          <h3 className="text-[10px] md:text-xs italic">
            Mathematics | Chemistry | Physics
          </h3>
        </div>
      </div>
      {/* O Levels */}
      <div
        className="shadow p-4 rounded-xl"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="">
          <h1 className="font-bold text-sm md:text-lg">
            Cambridge International O Levels
          </h1>
          <hr className="border-[#6460BE] border-[1px] w-1/4" />
          <h2 className="text-xs md:text-sm italic">
            June 2016 – November 2016
          </h2>
          <h3 className="text-[10px] md:text-xs italic">
            Mathematics | Add'l. Mathematics | Chemistry | Physics | English
            Language
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Education;
