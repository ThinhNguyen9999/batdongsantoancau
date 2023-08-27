import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'batdongsan';
  windowScrolled = false;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  sendZalo() {
    location.assign("https://zalo.me/0949658615");
  }

  callPhone() {
    location.assign("tel:0949658615");
  }
}
