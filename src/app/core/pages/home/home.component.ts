import { Component, OnInit } from '@angular/core';
import { projectsData } from 'src/app/projects/data/projects.data';
import { ProjectInterface } from 'src/app/projects/interfaces/project.interface';
import { educationData } from '../../data/education.data';
import { testimonialData } from '../../data/testimonials.data';
import { EducationInterface } from '../../interface/education.interface';
import { ExperienceInterface } from '../../interface/experience.interface';
import { experienceData, softSkills, techStack } from '../../data/my-data';
import { TechStack } from '../../interface/techstack.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 
  projects: ProjectInterface[] = [];
  experiences: ExperienceInterface[] = [];
  certifications: EducationInterface[] = [];
  testimonials: any[] = []; 
  softSkills: string[] = [];
  techStack: TechStack[] = [];

 
  ngOnInit(): void {
    this.projects = projectsData.slice(0, 3);
    this.experiences = experienceData;
    this.certifications = educationData;
    this.testimonials = testimonialData;
    this.softSkills = softSkills;
     this.techStack = techStack;
  }

  
}
