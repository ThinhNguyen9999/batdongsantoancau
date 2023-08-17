import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private router: Router
  ) {

  }
  ngOnInit() {
  }

  checkRouter(param: any) {
    var homePage = document.querySelector<HTMLElement>('.home');
    var introduc = document.querySelector<HTMLElement>('.introduc');
    if (param = 1) {
      this.changeColorRed(homePage as HTMLElement)
    } else this.changeColorDefault(homePage as HTMLElement)
    if (param = 2) {
      this.changeColorRed(introduc as HTMLElement)
    } else this.changeColorDefault(introduc as HTMLElement)
    // if (param = 3) {
    //   this.changeColorRed(homePage as HTMLElement)
    // } else this.changeColorDefault(homePage as HTMLElement)
    // if (param = 4) {
    //   this.changeColorRed(homePage as HTMLElement)
    // } else this.changeColorDefault(homePage as HTMLElement)
    // if (param = 5) {
    //   this.changeColorRed(homePage as HTMLElement)
    // } else this.changeColorDefault(homePage as HTMLElement)
  }

  changeColorRed(change: any){
    change.style.color = '#ff3300';
  }
  changeColorDefault(change: any){
    change.style.color = '#000000';
  }


}
