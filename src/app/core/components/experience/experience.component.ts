import { Component, Input } from '@angular/core';
import { ExperienceInterface } from '../../interface/experience.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
   @Input() experience!: ExperienceInterface
}
