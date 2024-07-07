import { Component, OnInit } from '@angular/core';
import { ProjectInterface } from '../../interfaces/project.interface';
import { projectsData } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  projects: ProjectInterface[] = [];

  ngOnInit(): void {
    this.projects = projectsData;
    console.log({projects:this.projects});
  }

}
