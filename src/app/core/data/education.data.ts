import { EducationLevelEnum } from "../enums/education-level.enum";
import { EducationInterface } from "../interface/education.interface";

export const educationData: EducationInterface[] = [
    {
        institution:"Kenya Highlands University",
        course: "Bsc Computer Science",
        description: "",
        educationLevel: EducationLevelEnum.Degree,
        from: 2017,
        to: 2023,
    }
]