const SkillBadge = ({ skills }) => {
  return (
    <>
      {skills.map((skill) => (
        <span
          key={skill}
          className="badge badge-sm md:badge-md font-medium p-2 md:p-3 border-black"
        >
          {skill}
        </span>
      ))}
    </>
  );
};

export default SkillBadge;
