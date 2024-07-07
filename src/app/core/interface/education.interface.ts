import { EducationLevelEnum } from "../enums/education-level.enum";


export interface EducationInterface{
    id: string;
    name: string;
    from: Date;
    to: Date;
    educationLevel: EducationLevelEnum;
    description: string;
}