import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-icon',
  templateUrl: './project-icon.component.html',
  styleUrls: ['./project-icon.component.css']
})
export class ProjectIconComponent implements OnInit {

  currentSlideIndex = 0;

  images = ['halongStar.jpg', 'icon40.jpg', 'astro.jpg'];
  textTitle = ['The Hạ Long Star', 'Icon 40', 'The Astro Ha Long Bay'];
  textContent = ['Thành phố giao lộ trên đỉnh kì quan','Kiêu hãnh kiến trúc biểu tượng giữa Vịnh biển', 'Vẻ đẹp Kiến trúc Địa Trung Hải']
  textRouter = ['du-an/ha-long-star', 'du-an/icon-40', 'du-an/the-astro-halong-bay']

  imagesDesign = ['1pk.jpg', '2view.jpg', '3view.jpg', '4view.jpg'];
  imagesDesignIndex = 0;

  ngOnInit() {
    document.title = "Dự án Icon 40 - BĐS toàn cầu";

  }

  changeImg(res: string) {
    if (res === 'prev')
    {
      this.currentSlideIndex = (this.currentSlideIndex - 1 + this.images.length) % this.images.length;
    }
    else if (res === 'next') {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
    }
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

}
