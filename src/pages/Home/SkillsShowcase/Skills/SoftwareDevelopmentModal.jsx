import SkillBadge from "../../../../Components/SkillBadge";

const SoftwareDevelopmentModal = () => {
  const languagesAndFrameworks = ["C#", ".NET", "ASP.NET", "Entity Framework"];

  const architecturesAndPatterns = [
    "MVVM Architecture",
    "MVC Pattern",
    "Dependency Injection",
  ];

  const uiLibraries = ["Avalonia", "Telerik", "WPF", "XAML"];

  const toolsAndIDEs = ["Visual Studio", "Git", "NuGet Package Manager"];

  return (
    <>
      {/* SOFTWARE DEVELOPMENT MODAL */}
      <div>
        <input
          type="checkbox"
          id="ModalSoftwareDevelopment"
          className="modal-toggle"
        />
        <div className="modal" role="dialog">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="text-lg font-bold text-[#0BAA8C]">
              Software Development
            </h3>
            <div className="w-12 p-0.5 bg-[#0BAA8C] mt-2"></div>

            <h4 className="font-bold mt-4 text-xs md:text-base text-[#0BAA8C] mb-2">
              Languages & Frameworks
            </h4>
            <div className="flex flex-wrap gap-1">
              <SkillBadge skills={languagesAndFrameworks} />
            </div>

            <h4 className="font-bold mt-4 text-xs md:text-base text-[#0BAA8C] mb-2">
              Architectures & Patterns
            </h4>
            <div className="flex flex-wrap gap-1">
              <SkillBadge skills={architecturesAndPatterns} />
            </div>

            <h4 className="font-bold mt-4 text-xs md:text-base text-[#0BAA8C] mb-2">
              UI Libraries & Tools
            </h4>
            <div className="flex flex-wrap gap-1">
              <SkillBadge skills={uiLibraries} />
            </div>

            <h4 className="font-bold mt-4 text-xs md:text-base text-[#0BAA8C] mb-2">
              Tools & IDEs
            </h4>
            <div className="flex flex-wrap gap-1">
              <SkillBadge skills={toolsAndIDEs} />
            </div>

            <div className="modal-action">
              <label
                htmlFor="ModalSoftwareDevelopment"
                className="btn w-full bg-[#0BAA8C] text-white hover:bg-[#0BAA8C]"
              >
                Close
              </label>
            </div>
          </div>
          <label
            className="modal-backdrop"
            htmlFor="ModalSoftwareDevelopment"
          ></label>
        </div>
      </div>
    </>
  );
};

export default SoftwareDevelopmentModal;
