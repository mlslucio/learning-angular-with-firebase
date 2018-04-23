import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilmeComponent } from './filme/filme.component';
import { CatalogoComponent } from './catalogo/catalogo.component';

import {FilmeService} from './filme.service';
import {AppRoutesModule} from './app-routes/app-routes.module'




@NgModule({
  declarations: [
    AppComponent,
    FilmeComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutesModule
  ],
  providers: [FilmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
