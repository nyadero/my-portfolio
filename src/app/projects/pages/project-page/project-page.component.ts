import { Component, OnInit } from '@angular/core';
import { ProjectInterface } from '../../interfaces/project.interface';
import { projectsData } from '../../data/projects.data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit{
  project!:ProjectInterface;
  projects: ProjectInterface[] = [];


  constructor(
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.projects = projectsData;
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id");
      if (id) {
        const foundProject = this.projects.find(project => project.id == id);
        if (foundProject) {
          this.project = foundProject;
        } else {
          // Handle the case where the project is not found
          console.error(`Project with id ${id} not found`);
          // You might want to redirect or show a message
        }
      }
    })
  }

}
