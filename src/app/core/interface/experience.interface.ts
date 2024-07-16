import { EmploymentTypeEnum } from "../enums/employment-type.enum";

export interface ExperienceInterface{
    title: string;
    stack: string[];
    description: string;
    from: string;
    to: string;
    employer: string;
    employmentType: EmploymentTypeEnum;
    isCurrent: boolean;
}