import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { DistributionProjectComponent } from './distribution-project/distribution-project.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { SaleAndRentalComponent } from './sale-and-rental/sale-and-rental.component';
import { ProjectIconComponent } from './projects_bds/project-icon/project-icon.component';
import { DragonCastleComponent } from './projects_bds/dragon-castle/dragon-castle.component';
import { AstroComponent } from './projects_bds/astro/astro.component';
import { HolidayComponent } from './projects_bds/holiday/holiday.component';
import { RubyCityComponent } from './projects_bds/ruby-city/ruby-city.component';
import { SunGrandComponent } from './projects_bds/sun-grand/sun-grand.component';

const routes: Routes = [
  {path: 'trang-chu', component: HomeComponent,},
  {path: 'gioi-thieu', component: IntroduceComponent},
  {path: 'tin-tuc', component: NewsComponent},
  {path: 'lien-he', component: ContactComponent},
  {path: 'ban-va-cho-thue', component: SaleAndRentalComponent},

  {path: 'du-an', component: DistributionProjectComponent},
  {path: 'du-an/icon-40', component: ProjectIconComponent},
  {path: 'du-an/dragon-castle', component: DragonCastleComponent},
  {path: 'du-an/the-astro-halong-bay', component: AstroComponent},
  {path: 'du-an/the-holiday-halong', component: HolidayComponent},
  {path: 'du-an/ruby-city-ha-long', component: RubyCityComponent},
  {path: 'du-an/sun-grand-ha-long', component: SunGrandComponent},
  {path: 'du-an/ha-long-star', component: DragonCastleComponent},
  {path: '', redirectTo: '/trang-chu', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
