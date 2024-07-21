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
        projectStatus: ProjectStatusEnum.Development,
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
    {
        id: "dummy-products",
        projectCategory: ProjectCategoryEnum.Frontend,
        projectStatus: ProjectStatusEnum.Completed,
        description: "An angular web project that fetches and displays products provided by the dummyjson api " +
        "The endpints consumed are get-all-products, get a single product, search products and get products by category",
        github: "https://github.com/nyadero/dummy-products",
        liveUrl: "https://dummy-products-zeta.vercel.app/",
        name: "Dummy Products",
        coverPic: "assets/images/p-images/dummy-products/dummy-products.png",
        photos: [

           "assets/images/p-images/dummy-products/dummy-products1.png",    
           "assets/images/p-images/dummy-products/dummy-products2.png",    
           "assets/images/p-images/dummy-products/dummy-products3.png",    
           "assets/images/p-images/dummy-products/dummy-products4.png",    
        ],
        tags: ["Angular", "tailwindcss"]
    },

]