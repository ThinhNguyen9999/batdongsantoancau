import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-icon',
  templateUrl: './project-icon.component.html',
  styleUrls: ['./project-icon.component.css']
})
export class ProjectIconComponent implements OnInit {

  ngOnInit() {
    document.title = "Dự án Icon 40 - BĐS toàn cầu";

  }

}
