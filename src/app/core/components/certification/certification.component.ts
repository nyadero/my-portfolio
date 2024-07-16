import { Component, Input } from '@angular/core';
import { EducationInterface } from '../../interface/education.interface';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent {
   @Input() certification!: EducationInterface;
}
