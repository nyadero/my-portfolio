import { EducationLevelEnum } from "../enums/education-level.enum";


export interface EducationInterface{
    institution: string;
    course: string;
    from: number;
    to: number;
    educationLevel: EducationLevelEnum;
    description: string;
}