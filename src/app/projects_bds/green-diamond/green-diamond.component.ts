import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-green-diamond',
  templateUrl: './green-diamond.component.html',
  styleUrls: ['./green-diamond.component.css']
})
export class GreenDiamondComponent implements OnInit {

  slideImgIndex: number = 1;
  imagesDesignIndex = 0;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.showSlidesImgIcon(this.imagesDesignIndex);
  }

  currentSlide(n: any) {
    this.showSlidesImgIcon(this.slideImgIndex = n);
  }

  // Next/previous controls
  plusSlides(n: any) {
    this.showSlidesImgIcon(this.slideImgIndex += n);
  }

  showSlidesImgIcon(n: any) {
    let i;
    var slides = document.getElementsByClassName("slidesHoliday");
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) {this.slideImgIndex = 1}
    if (n < 1) {this.slideImgIndex = 1}
    for (i = 0; i < slides.length; i++) {
      let test = slides[i] as HTMLElement;
      test.style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    let currentSlide = slides[this.slideImgIndex-1] as HTMLElement;
    currentSlide.style.display = "block";
    dots[this.slideImgIndex-1].className += " active";
  }
}
