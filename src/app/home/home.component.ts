import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // ảnh đầu trang
  currentSlideIndex = 0;
  images = ['halongStar.jpg', 'icon40.jpg', 'astro.jpg'];
  textTitle = ['The Hạ Long Star', 'Icon 40', 'The Astro Ha Long Bay'];
  textContent = ['Thành phố giao lộ trên đỉnh kì quan','Kiêu hãnh kiến trúc biểu tượng giữa Vịnh biển', 'Vẻ đẹp Kiến trúc Địa Trung Hải']
  textRouter = ['du-an/ha-long-star', 'du-an/icon-40', 'du-an/the-astro-halong-bay']

  // ảnh cho tùng dự án
  slideImgIndex: number = 1;

  ngOnInit() {
    document.title = "Trang chủ - BĐS toàn cầu";
  }

  ngAfterViewInit() {
    setInterval(() => {
      this.showNextSlide();
    }, 3000);

    this.showSlidesImgIcon(this.slideImgIndex);
    this.showSlidesImgDragonCastle(this.slideImgIndex);
    this.showSlidesImgAstroHLB(this.slideImgIndex);
    this.showSlidesImgTheHolidayHL(this.slideImgIndex);
    this.showSlidesImgRubyHL(this.slideImgIndex);
    this.showSlidesImgSunGrand(this.slideImgIndex);
  }

  showNextSlide() {
    const divLogin = document.querySelectorAll('.img-bds');
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
    for (let i = 0; i < divLogin.length; i++) {
      divLogin[i].classList.add('init');
    }
  }
  showPrevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.images.length) % this.images.length;
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
