import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DistributionProjectRoutingModule } from './distribution-project-routing.module';
import { ProjectIconComponent } from '../project-icon/project-icon.component';
import { DragonCastleComponent } from '../dragon-castle/dragon-castle.component';


@NgModule({
  declarations: [
    ProjectIconComponent,
    DragonCastleComponent
  ],
  imports: [
    CommonModule,
    DistributionProjectRoutingModule
  ]
})
export class DistributionProjectModule { }
