import { Component, OnInit } from '@angular/core';
import { WakatimeService } from '../../service/wakatime.service';

@Component({
  selector: 'app-wakatime',
  templateUrl: './wakatime.component.html',
  styleUrls: ['./wakatime.component.css']
})
export class WakatimeComponent implements OnInit {
  wakatimeData: any;

  constructor(private wakatimeService: WakatimeService) { }

  ngOnInit(): void {
    this.wakatimeService.getWakatimeData().subscribe(
      (data) => {
       this.wakatimeData = data;
      },

      (error) => {
        console.log(error);
      }
  )}
}
