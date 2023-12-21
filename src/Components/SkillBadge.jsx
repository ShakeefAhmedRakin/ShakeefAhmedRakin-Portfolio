const SkillBadge = ({ skills }) => {
  return (
    <>
      {skills.map((skill) => (
        <span
          key={skill}
          className="badge badge-sm md:badge-md border-none text-background bg-primary font-medium p-2 md:p-3"
        >
          {skill}
        </span>
      ))}
    </>
  );
};

export default SkillBadge;
