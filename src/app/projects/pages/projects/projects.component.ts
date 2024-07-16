import { Component, OnInit } from '@angular/core';
import { ProjectInterface } from '../../interfaces/project.interface';
import { projectsData } from '../../data/projects.data';
import { ProjectCategoryEnum } from '../../enums/project-category';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: ProjectInterface[] = [];
  filteredProjects: ProjectInterface[] = [];
  projectCategories = Object.values(ProjectCategoryEnum);

  ngOnInit(): void {
    this.projects = projectsData;
    this.filteredProjects = projectsData;
    console.log({ projects: this.projects });
  }

  filterProjects(category: ProjectCategoryEnum) {
    console.log({ category });
    this.filteredProjects = this.projects.filter(project => project.projectCategory === category);
    console.log(this.filteredProjects);
  }

  allProjects() {
    this.filteredProjects = this.projects;
  }
}
