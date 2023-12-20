const SkillBadge = ({ skills }) => {
  return (
    <>
      {skills.map((skill) => (
        <span
          key={skill}
          className="badge border-none text-background bg-primary font-medium p-3"
        >
          {skill}
        </span>
      ))}
    </>
  );
};

export default SkillBadge;
