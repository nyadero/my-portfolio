import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  images = [
    { src: 'https://via.placeholder.com/600x400/ff7f7f/333333?text=Image+1', alt: 'Image 1' },
    { src: 'https://via.placeholder.com/600x400/ffbf7f/333333?text=Image+2', alt: 'Image 2' },
    { src: 'https://via.placeholder.com/600x400/ffff7f/333333?text=Image+3', alt: 'Image 3' },
    { src: 'https://via.placeholder.com/600x400/7fff7f/333333?text=Image+4', alt: 'Image 4' },
    { src: 'https://via.placeholder.com/600x400/7f7fff/333333?text=Image+5', alt: 'Image 5' }
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
    }, 3000); // Change image every 3 seconds
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
