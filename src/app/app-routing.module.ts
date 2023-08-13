import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { DistributionProjectComponent } from './distribution-project/distribution-project.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { SaleAndRentalComponent } from './sale-and-rental/sale-and-rental.component';
import { ProjectIconComponent } from './project-icon/project-icon.component';
import { DragonCastleComponent } from './dragon-castle/dragon-castle.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'gioi-thieu', component: IntroduceComponent},
  // {path: 'du-an', component: DistributionProjectComponent,
  //   children:[
  //     {
  //       path:'icon-40',
  //       loadChildren: () => import('./project-icon/project-icon.module').then(m => m.ProjectIconModule),
  //     },
  //     {
  //       path:'dragon-castle',
  //       loadChildren: () => import('./dragon-castle/dragon-castle.module').then(m => m.DragonCastleModule),
  //     }
  //   ]
  // },
  {path: 'tin-tuc', component: NewsComponent},
  {path: 'lien-he', component: ContactComponent},
  {path: 'ban-va-cho-thue', component: SaleAndRentalComponent},
  {path: 'du-an', component: DistributionProjectComponent},
  {path: 'du-an/icon-40', component: ProjectIconComponent},
  {path: 'du-an/dragon-castle', component: DragonCastleComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
