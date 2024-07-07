import { Component, OnInit } from '@angular/core';
import { projectsData } from 'src/app/projects/data/projects.data';
import { ProjectInterface } from 'src/app/projects/interfaces/project.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 
  projects: ProjectInterface[] = [];

  ngOnInit(): void {
    this.projects = projectsData.slice(0, 4);
  }

}
