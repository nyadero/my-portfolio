import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nodata',
  templateUrl: './nodata.component.html',
  styleUrls: ['./nodata.component.css']
})
export class NodataComponent {
   @Input() message!: string
}
