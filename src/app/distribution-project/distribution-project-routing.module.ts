import { RouterModule, Routes } from '@angular/router';
import { DistributionProjectComponent } from './distribution-project.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectIconComponent } from '../project-icon/project-icon.component';
import { DragonCastleComponent } from '../dragon-castle/dragon-castle.component';

const distributionProjectRoutes: Routes = [
  {
    path: 'du-an',
    //component: DistributionProjectComponent,
    children: [
      {
        path: 'icon-40',
        component: ProjectIconComponent
      },
      {
        path: 'dragon-castle',
        component: DragonCastleComponent
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(distributionProjectRoutes)
  ],
  exports: [
    RouterModule
  ]

})
export class DistributionProjectRoutingModule {}
