import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'natours',
    loadChildren: () =>
      import('./natours/natours.module').then((m) => m.NatoursModule),
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./natours/natours.module').then((m) => m.NatoursModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
