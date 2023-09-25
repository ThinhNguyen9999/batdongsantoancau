import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  ngOnInit() {
    window.addEventListener('mouseup',function(event){
      var drop = document.getElementById('pol') as HTMLElement;
      if(event.target != drop && (<HTMLElement>event.target).parentNode != drop){
        drop.style.display = 'none';
      }
    });
  }

  checkNav() {
    var nav = document.getElementById('pol') as HTMLElement;
    nav.style.display='block';
  }
}
