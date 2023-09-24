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
import { GreenDiamondComponent } from './projects_bds/green-diamond/green-diamond.component';

const routes: Routes = [
  { path: 'trang-chu', component: HomeComponent, title: "Trang chủ - BĐS toàn cầu" },
  { path: 'gioi-thieu', component: IntroduceComponent, title: "Giới thiệu- BĐS toàn cầu" },
  { path: 'tin-tuc', component: NewsComponent, title: "Tin tức - BĐS toàn cầu" },
  { path: 'lien-he', component: ContactComponent, title: "Liên hệ - BĐS toàn cầu" },
  { path: 'ban-va-cho-thue', component: SaleAndRentalComponent, title: "Bán và cho thuê - BĐS toàn cầu" },

  { path: 'du-an', component: DistributionProjectComponent, title: "Dự án phan phối - BĐS toàn cầu" },
  { path: 'du-an/icon-40', component: ProjectIconComponent, title: "Dự án Icon 40 - BĐS toàn cầu" },
  { path: 'du-an/dragon-castle', component: DragonCastleComponent, title: "Dragon Castle - BĐS toàn cầu" },
  { path: 'du-an/the-astro-halong-bay', component: AstroComponent, title: "The Astro HaLong Bay - BĐS toàn cầu" },
  { path: 'du-an/the-holiday-halong', component: HolidayComponent, title: "The Holiday Hạ Long - BĐS toàn cầu" },
  { path: 'du-an/ruby-city-ha-long', component: RubyCityComponent, title: "Ruby City Hạ Long - BĐS toàn cầu" },
  { path: 'du-an/sun-grand-ha-long', component: SunGrandComponent, title: "Sun Grand City Feria Hạ Long - BĐS toàn cầu" },
  { path: 'du-an/green-diamond', component: GreenDiamondComponent, title: "Green Diamond Hạ Long - BĐS toàn cầu" },
  { path: '', redirectTo: '/trang-chu', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
