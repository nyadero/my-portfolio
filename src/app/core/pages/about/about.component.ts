import { Component, OnInit } from '@angular/core';
import { ExperienceInterface } from '../../interface/experience.interface';
import { EducationInterface } from '../../interface/education.interface';
import { experienceData } from '../../data/experience.data';
import { educationData } from '../../data/education.data';
import { testimonialData } from '../../data/testimonials.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
   experiences: ExperienceInterface[] = [];
   certifications: EducationInterface[] = [];
   testimonials: any[] = []; 

  ngOnInit(): void {
    this.experiences = experienceData;
    this.certifications = educationData;
    this.testimonials = testimonialData
  }

}
