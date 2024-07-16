import { EmploymentTypeEnum } from "../enums/employment-type.enum";
import { ExperienceInterface } from "../interface/experience.interface";

export const experienceData: ExperienceInterface[] = [
   {
    title: "Software Developer",
    stack: ["Springboot", "Java", "Postgresql", "Angular", "Tailwincss"],
    description: "Was founder",
    from: "2023 September",
    to: "Present",
    employer: "Enthuzze",
    employmentType: EmploymentTypeEnum.Parttime,
    isCurrent: true
   },
   {
      title: "Software Developer",
      stack: ["Springboot", "Java", "Postgresql", "Angular", "Tailwincss"],
      description: "Was founder",
      from: "2023 September",
      to: "Present",
      employer: "Enthuzze",
      employmentType: EmploymentTypeEnum.Parttime,
      isCurrent: true
   }
]