import { ProjectCategoryEnum } from "../enums/project-category";
import { ProjectStatusEnum } from "../enums/project-status";
import { ProjectInterface } from "../interfaces/project.interface";

export const projectsData: ProjectInterface[] = [
    {
        id: "taskbuddy",
        projectCategory: "Web",
        projectStatus: "Completed",
        description: "A simple crud react application using react and local storage",
        github: "https://github.com/nyadero/taskbuddy",
        liveUrl: "https://taskbuddy.netlify.app/",
        name: "Task Buddy",
        coverPic: "assets/images/p-images/taskbuddy/taskbuddy.png",
        photos: [
            "assets/images/p-images/taskbuddy/taskbuddy1.png",
            "assets/images/p-images/taskbuddy/taskbuddy2.png",
            "assets/images/p-images/taskbuddy/taskbuddy3.png",
            "assets/images/p-images/taskbuddy/taskbuddy4.png",
        ],
        tags: ["react", "localstorage"]
    },
    {
        id: "dreamwheels",
        projectCategory: ProjectCategoryEnum.Backend,
        projectStatus: ProjectStatusEnum.Completed,
        description: "This is a simple springboot project to allow users to create and manage their dream garages."
            + "It is a basic or simple project that i am using to practice what i have learnt in the spring and springboot ecosystem.",
        github: "https://github.com/nyadero/dreamwheels",
        liveUrl: "",
        name: "Dreamwheels",
        coverPic: "assets/images/p-images/dreamwheels/dreamwheels.png",
        photos: [
            "assets/images/p-images/dreamwheels/dreamwheels.png",
            "assets/images/p-images/dreamwheels/dreamwheels1.png"

        ],
        tags: ["java", "springboot", "spring-security", "postgresql"]
    },

]