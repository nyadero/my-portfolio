import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() images: any[] = [];

  currentIndex = 0;

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      // If currentIndex is 0, set it to the last index
      this.currentIndex = this.images.length - 1;
    }
  }

  next() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      // If currentIndex is at the last index, set it to 0 to start from the beginning
      this.currentIndex = 0;
    }
  }
}
