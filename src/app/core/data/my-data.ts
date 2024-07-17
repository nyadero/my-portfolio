import { EmploymentTypeEnum } from "../enums/employment-type.enum";
import { ExperienceInterface } from "../interface/experience.interface";
import { TechStack } from "../interface/techstack.interface";

export const softSkills: string[] = [
  "Communication",
  "Problem-solving",
  "Goal Oriented",
  "Teamwork",
  "Analytical skills",
  "Leadership",
  "Adaptability"
];

export const preferredCompanyCulture: string[] = [
  
];

export const techStack: TechStack[] = [
  //  java
  {
    name: "Java",
    logo: "assets/images/logos/languages/java.svg"
  },
  // kotlin
  {
    name: "Kotlin",
    logo: "assets/images/logos/languages/kotlin.svg"
  },
  // typescript
  {
    name: "Typescript",
    logo: "assets/images/logos/languages/typescript.svg"
  },
  // Javascript
  {
    name: "Javascript",
    logo: "assets/images/logos/languages/javascript.svg"
  },
  // python
  {
    name: "Python",
    logo: "assets/images/logos/languages/python.svg"
  },
  // php
  {
    name: "PHP",
    logo: "assets/images/logos/languages/php.png"
  },
  // c++
  {
    name: "C++",
    logo: "assets/images/logos/languages/c++.svg"
  },
  // frameworks
  // angular
  {
    name: "Angular",
    logo: "assets/images/logos/frameworks/angular.svg"
  },
  // android
  {
    name: "Android",
    logo: "assets/images/logos/frameworks/android.svg"
  },
  // springboot
  {
    name: "Springboot",
    logo: "assets/images/logos/frameworks/spring.svg"
  },
  // laravel
  {
    name: "Laravel",
    logo: "assets/images/logos/frameworks/laravel.svg"
  },
  // nodejs
  {
    name: "Nodejs",
    logo: "assets/images/logos/frameworks/nodejs.svg"
  },
  // express
  {
    name: "Express",
    logo: "assets/images/logos/frameworks/express.svg"
  },
  // nestjs
  {
    name: "Nest",
    logo: "assets/images/logos/frameworks/Nestjs.svg"
  },
  // databases
  // Postgres
  {
    name: "Postgres",
    logo: "assets/images/logos/databases/postgresql.svg"
  },
  // mysql
  {
    name: "Mysql",
    logo: "assets/images/logos/databases/mysql.svg"
  },
  // mongodb
  {
    name: "Mongodb",
    logo: "assets/images/logos/databases/mongodb.svg"
  },
  // redis
  {
    name: "Redis",
    logo: "assets/images/logos/databases/redis.svg"
  },
  // cloud
  // github
  {
    name: "Github",
    logo: "assets/images/logos/cloud/github.svg"
  },
  // docker
  {
    name: "Docker",
    logo: "assets/images/logos/cloud/docker.svg"
  },
  // firebase
  {
    name: "Firebase",
    logo: "assets/images/logos/cloud/firebase.svg"
  },
]


// work experience
export const experienceData: ExperienceInterface[] = [
  {
    title: "Software Developer Intern",
    stack: ["Python", "Javascript", "Mysql", "Django", "Tailwincss", "Nodejs"],
    from: "2023 May",
    to: "2023 September",
    employer: "Lake Basin Development Authority",
    employmentType: EmploymentTypeEnum.Internship,
    isCurrent: true,
    description: "Software Developer Intern responsible for developing a docs_center system used by the institution to manage their documents."
      + " Also provided user support which encompassed tasks such as troubleshooting software conflicts, installing and configuring applications, and ensuring that users could work efficiently with their "
      + "computing devices"
  },
  {
    title: "Freelance Software Developer",
    stack: ["Java", "Javascript", "Mysql", "Postgresql", "Kotlin", "Tailwincss", "Angular"],
    from: "2023 May",
    to: "2023 September",
    employer: "Individuals and upwork",
    employmentType: EmploymentTypeEnum.Internship,
    isCurrent: true,
    description: "Software Developer Intern responsible for developing a docs_center system used by the institution to manage their documents."
      + " Also provided user support which encompassed tasks such as troubleshooting software conflicts, installing and configuring applications, and ensuring that users could work efficiently with their "
      + "computing devices"
  },
]