import React from "react";
import SkillTag from "./SkillTag.js";
import { SkillsList } from "../data/skillsList";

function Skills() {
  return (
    <div className="skills">
      {SkillsList.map((skill) => {
        return <SkillTag name={skill}></SkillTag>;
      })}
    </div>
  );
}

export default Skills;
