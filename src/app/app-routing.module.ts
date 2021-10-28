import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalAComponent } from './animal-a/animal-a.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalProductComponent } from './animal-product/animal-product.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'product/details/:id', component: AnimalDetailsComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'product', component: AnimalProductComponent },
  { path: 'animal', component: AnimalAComponent },
  { path: 'planteAccesoire', component: AnimalProductComponent },
  { path: 'blog', component: AnimalProductComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
