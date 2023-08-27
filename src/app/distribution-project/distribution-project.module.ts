import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectIconComponent } from '../projects_bds/project-icon/project-icon.component';
import { DragonCastleComponent } from '../projects_bds/dragon-castle/dragon-castle.component';
import { DistributionProjectComponent } from './distribution-project.component';


@NgModule({
  declarations: [
    DistributionProjectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DistributionProjectModule { }
