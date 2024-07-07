import { EmploymentTypeEnum } from "../enums/employment-type.enum";

export interface ExperienceInterface{
    id: string;
    title: string;
    stack: string[];
    description: string;
    from: Date;
    to: Date;
    employer: string;
    employmentType: EmploymentTypeEnum;
    isCurrent: boolean;
}