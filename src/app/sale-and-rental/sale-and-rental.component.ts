import { Component } from '@angular/core';

@Component({
  selector: 'app-sale-and-rental',
  templateUrl: './sale-and-rental.component.html',
  styleUrls: ['./sale-and-rental.component.css']
})
export class SaleAndRentalComponent {

  slideIndex: number = 1;

  ngAfterViewInit() {
  this.showSlides(this.slideIndex);
  }

  // Next/previous controls
  plusSlides(n: any) {
    this.showSlides(this.slideIndex += n);
  }

// Thumbnail image controls
  currentSlide(n: any) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: any) {
    let i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    //var captionText = document.getElementById("caption");
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      let test = slides[i] as HTMLElement;
      test.style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    let currentSlide = slides[this.slideIndex-1] as HTMLElement;
    currentSlide.style.display = "block";
    dots[this.slideIndex-1].className += " active";

    //captionText.innerHTML = dots[this.slideIndex-1].alt;
  }
}
