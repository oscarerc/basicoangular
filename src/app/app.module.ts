import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importamos el nuevo compoinente
import{VideojuegoComponent}from'./videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { HomeComponent } from './home/home.component';
import { CursowebComponent } from './cursoweb/cursoweb.component';
import { CursosintensivosComponent } from './cursosintensivos/cursosintensivos.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    CursosComponent,
    ZapatillasComponent,
    HomeComponent,
    CursowebComponent,
    CursosintensivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
