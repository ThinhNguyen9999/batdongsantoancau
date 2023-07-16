import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { DistributionProjectComponent } from './distribution-project/distribution-project.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { SaleAndRentalComponent } from './sale-and-rental/sale-and-rental.component';
import { ToastrModule } from 'ngx-toastr';
import { ProjectIconComponent } from './distribution-project/project-icon/project-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    IntroduceComponent,
    DistributionProjectComponent,
    NewsComponent,
    ContactComponent,
    SaleAndRentalComponent,
    ProjectIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
