import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distribution-project',
  templateUrl: './distribution-project.component.html',
  styleUrls: ['./distribution-project.component.css']
})
export class DistributionProjectComponent implements OnInit {

  slideImgIndex: number = 1;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.showSlidesImgIcon(this.slideImgIndex);
    this.showSlidesImgDragonCastle(this.slideImgIndex);
    this.showSlidesImgAstroHLB(this.slideImgIndex);
    this.showSlidesImgTheHolidayHL(this.slideImgIndex);
    this.showSlidesImgRubyHL(this.slideImgIndex);
    this.showSlidesImgSunGrand(this.slideImgIndex);
  }

  // Thumbnail image controls
  currentSlide(n: any, project: string) {
    switch(project) {
      case 'Icon40':
        this.showSlidesImgIcon(this.slideImgIndex = n);
        break;
      case 'DragonCastle':
        this.showSlidesImgDragonCastle(this.slideImgIndex = n);
        break;
      case 'Astro':
        this.showSlidesImgAstroHLB(this.slideImgIndex = n);
        break;
      case 'HolidayHL':
        this.showSlidesImgTheHolidayHL(this.slideImgIndex = n);
        break;
      case 'RubyHL':
        this.showSlidesImgRubyHL(this.slideImgIndex = n);
        break;
      case 'SunGrand':
        this.showSlidesImgSunGrand(this.slideImgIndex = n);
        break;
      default:
    }
  }

  showSlidesImgIcon(n: any) {
    let i;
    var slides = document.getElementsByClassName("icon40");
    var dots = document.getElementsByClassName("demo-icon");
    if (n > slides.length) {this.slideImgIndex = 1}
    if (n < 1) {this.slideImgIndex = slides.length}
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

  showSlidesImgDragonCastle(n: any) {
    let i;
    var slides = document.getElementsByClassName("dragonCT");
    var dots = document.getElementsByClassName("demo-dragon");
    if (n > slides.length) {this.slideImgIndex = 1}
    if (n < 1) {this.slideImgIndex = slides.length}
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

  showSlidesImgAstroHLB(n: any) {
    let i;
    var slides = document.getElementsByClassName("astroHLB");
    var dots = document.getElementsByClassName("demo-astro");
    if (n > slides.length) {this.slideImgIndex = 1}
    if (n < 1) {this.slideImgIndex = slides.length}
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

  showSlidesImgTheHolidayHL(n: any) {
    let i;
    var slides = document.getElementsByClassName("holidayHL");
    var dots = document.getElementsByClassName("demo-holiday");
    if (n > slides.length) {this.slideImgIndex = 1}
    if (n < 1) {this.slideImgIndex = slides.length}
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

  showSlidesImgRubyHL(n: any) {
    let i;
    var slides = document.getElementsByClassName("rubyHL");
    var dots = document.getElementsByClassName("demo-ruby");
    if (n > slides.length) {this.slideImgIndex = 1}
    if (n < 1) {this.slideImgIndex = slides.length}
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

  showSlidesImgSunGrand(n: any) {
    let i;
    var slides = document.getElementsByClassName("sunGrand");
    var dots = document.getElementsByClassName("demo-sunGrand");
    if (n > slides.length) {this.slideImgIndex = 1}
    if (n < 1) {this.slideImgIndex = slides.length}
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
