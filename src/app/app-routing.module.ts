import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { DistributionProjectComponent } from './distribution-project/distribution-project.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { SaleAndRentalComponent } from './sale-and-rental/sale-and-rental.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'gioi-thieu', component: IntroduceComponent},
  {path: 'du-an-phan-phoi', component: DistributionProjectComponent},
  {path: 'tin-tuc', component: NewsComponent},
  {path: 'lien-he', component: ContactComponent},
  {path: 'ban-va-cho-thue', component: SaleAndRentalComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
