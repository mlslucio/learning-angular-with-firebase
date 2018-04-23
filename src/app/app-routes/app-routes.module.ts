import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {FilmeComponent} from '../filme/filme.component';
import {CatalogoComponent} from '../catalogo/catalogo.component';

const appRoutes: Routes = [
  { path: '', component: FilmeComponent },
  { path: 'catalogo', component: CatalogoComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes   
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutesModule {
  

 }
