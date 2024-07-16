import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  images = [
    { src: './assets/images/mobileapps.jpg', alt: 'Mobile apps' },
    { src: './assets/images/data-analysis.jpg', alt: 'Data analysis' },
    { src: './assets/images/websites.jpg', alt: 'Websites' },
    { src: './assets/images/backend-development.jpg', alt: 'Backend apis' }
  ];
  
  currentIndex = 0;
  intervalId: any;

  constructor() { }

  ngOnInit(): void {
    this.startAutoChange();
  }

  ngOnDestroy(): void {
    this.stopAutoChange();
  }

  startAutoChange(): void {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 6000); // Change image every 6 seconds
  }

  stopAutoChange(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
