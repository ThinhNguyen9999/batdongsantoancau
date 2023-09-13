import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragon-castle',
  templateUrl: './dragon-castle.component.html',
  styleUrls: ['./dragon-castle.component.css']
})
export class DragonCastleComponent implements OnInit {

  slideImgIndex: number = 1;

  imagesDesign = ['1pk.jpg', '2view.jpg', '3view.jpg', '4view.jpg'];
  utilities = ['view5.jpg', 'view6.jpg', 'view7.jpg', 'view8.jpg', 'view9.jpg', 'view10.jpg', 'view11.jpg'];
  apartments = ['canho1.jpg', 'canhoA1.jpg', 'canhoA2.jpg', 'canhoB.jpg', 'canhoC1.jpg', 'canhoC2.jpg', 'canhoD.jpg'];
  interiors = ['phongkhach.jpg', 'phongbep.jpg', 'phongngu.jpg', 'phongvesinh.jpg'];

  imagesDesignIndex = 0;
  utilitiesIndex = 0;
  apartmentsIndex = 0;
  interiorsIndex = 0;


  ngOnInit() {
    document.title = "Dragon Castle - BĐS toàn cầu";
    this.showSlidesImgDragonCastle(this.slideImgIndex);
  }

  ngAfterViewInit() {
    this.showSlidesImgDragonCastle(this.slideImgIndex);
  }

  changeImgDesign(res: string, params: string) {
    switch (params)
    {
      case 'utilities':
        if (res === 'prev') this.utilitiesIndex = (this.utilitiesIndex - 1 + this.utilities.length) % this.utilities.length;
        else if (res === 'next') this.utilitiesIndex = (this.utilitiesIndex + 1) % this.utilities.length;
        break;

      case 'apartments':
        if (res === 'prev') this.apartmentsIndex = (this.apartmentsIndex - 1 + this.apartments.length) % this.apartments.length;
        else if (res === 'next') this.apartmentsIndex = (this.apartmentsIndex + 1) % this.apartments.length;
        break;

      case 'interiors':
        if (res === 'prev') this.interiorsIndex = (this.interiorsIndex - 1 + this.interiors.length) % this.interiors.length;
        else if (res === 'next') this.interiorsIndex = (this.interiorsIndex + 1) % this.interiors.length;
        break
    }
  }

  currentSlide(n: any) {
    this.showSlidesImgDragonCastle(this.slideImgIndex = n);
  }

  // Next/previous controls
  plusSlides(n: any) {
    this.showSlidesImgDragonCastle(this.slideImgIndex += n);
  }

  showSlidesImgDragonCastle(n: any) {
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
