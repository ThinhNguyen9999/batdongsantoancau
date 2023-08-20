import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentSlideIndex = 0;
  images = ['halongStar.jpg', 'icon40.jpg', 'astro.jpg'];
  textTitle = ['The Hạ Long Star', 'Icon 40', 'The Astro Ha Long Bay'];
  textContent = ['Thành phố giao lộ trên đỉnh kì quan','Kiêu hãnh kiến trúc biểu tượng giữa Vịnh biển', 'Vẻ đẹp Kiến trúc Địa Trung Hải']
  textRouter = ['du-an/ha-long-star', 'du-an/icon-40', 'du-an/the-astro-halong-bay']

  ngOnInit() {
    document.title = "Trang chủ - BĐS toàn cầu";
  }

  ngAfterViewInit() {
    setInterval(() => {
      this.showNextSlide();
    }, 3000);
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

}
