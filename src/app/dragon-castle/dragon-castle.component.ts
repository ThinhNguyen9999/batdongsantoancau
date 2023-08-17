import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragon-castle',
  templateUrl: './dragon-castle.component.html',
  styleUrls: ['./dragon-castle.component.css']
})
export class DragonCastleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.title = "Dragon Castle - BĐS toàn cầu";

  }

}
