import { Component, ElementRef, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'batdongsan';
  windowScrolled = false;
  private unsubscribe$ = new Subject();

  constructor(private router: Router, private elementRef: ElementRef) {}

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.unsubscribe$)
    ).subscribe(() => {
      this.elementRef.nativeElement.ownerDocument.body.scrollTop = 0;
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

  youTube() {
    location.assign("https://www.youtube.com/@BDS-Globalproperty/videos");
  }

  onActivate(event: any) {
    window.scroll({
      top: 0,
      left: 0,
      // behavior: 'smooth'
    });
  }


}
