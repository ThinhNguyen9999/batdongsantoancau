import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragon-castle',
  templateUrl: './dragon-castle.component.html',
  styleUrls: ['./dragon-castle.component.css']
})
export class DragonCastleComponent implements OnInit {

  slideImgIndex: number = 1;

  imagesDesign = ['1pk.jpg', '2view.jpg', '3view.jpg', '4view.jpg'];
  imagesDesignIndex = 0;

  ngOnInit() {
    document.title = "Dragon Castle - BĐS toàn cầu";
    this.showSlidesImgIcon(this.slideImgIndex);
  }

  ngAfterViewInit() {
    this.showSlidesImgIcon(this.slideImgIndex);
  }

  changeImgDesign(res: string) {
    if (res === 'prev')
    {
      this.imagesDesignIndex = (this.imagesDesignIndex - 1 + this.imagesDesign.length) % this.imagesDesign.length;
    }
    else if (res === 'next') {
      this.imagesDesignIndex = (this.imagesDesignIndex + 1) % this.imagesDesign.length;
    }
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
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
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
