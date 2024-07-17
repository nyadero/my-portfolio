import { Component, Input } from '@angular/core';
import { ProjectInterface } from '../../interfaces/project.interface';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

   @Input() project!: ProjectInterface;
   isReadingMore: boolean = false;


  toggleReadMore() {
    this.isReadingMore = !this.isReadingMore;
  }

  
}
