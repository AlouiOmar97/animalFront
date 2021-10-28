import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimalProductComponent } from './animal-product/animal-product.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalAComponent } from './animal-a/animal-a.component';
import { AnimalADetailComponent } from './animal-adetail/animal-adetail.component';
import { FormsModule } from '@angular/forms';
import { PlantAComponent } from './plant-a/plant-a.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AnimalProductComponent,
    AnimalDetailsComponent,
    AnimalAComponent,
    AnimalADetailComponent,
    PlantAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
