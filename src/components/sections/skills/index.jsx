import { skills } from "@/lib/skills";

const SkillsSection = () => {
  return (
    <div className="border-y-2 border-[#ABB2BF] my-20 mx-15 p-10 flex flex-wrap gap-x-5">
      {skills.map((skill, index) => (
        <div key={index}>
          <h3 className="text-3xl text-[#ABB2BF] uppercase font-semibold">
            {skill}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
