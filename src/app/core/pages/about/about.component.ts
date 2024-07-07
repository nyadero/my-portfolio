import { Component, OnInit } from '@angular/core';
import { ExperienceInterface } from '../../interface/experience.interface';
import { EducationInterface } from '../../interface/education.interface';

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
    throw new Error('Method not implemented.');
  }

}
