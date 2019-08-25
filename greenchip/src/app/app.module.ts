import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { FormationSectionComponent } from './formation-section/formation-section.component';
import { SpecialiteSectionComponent } from './specialite-section/specialite-section.component';
import { InscrisSectionComponent } from './inscris-section/inscris-section.component';
import { CampusSectionComponent } from './campus-section/campus-section.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    SecondSectionComponent,
    FormationSectionComponent,
    SpecialiteSectionComponent,
    InscrisSectionComponent,
    CampusSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
