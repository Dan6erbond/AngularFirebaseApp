import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalsComponent } from './animals/animals.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'animals',
    component: AnimalsComponent,
    children: [{ path: ':name', component: AnimalDetailComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
