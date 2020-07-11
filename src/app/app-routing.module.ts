import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalsComponent } from './animals/animals.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { PreloadGuard } from './preload.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'animals',
    component: AnimalsComponent,
    children: [
      {
        path: ':name',
        resolve: [PreloadGuard],
        component: AnimalDetailComponent,
      },
    ],
  },
  { path: 'animalss', redirectTo: 'animals', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
