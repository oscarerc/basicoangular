import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//2)importamos los componentes
//exportamos las clases creadas en los componentes
import{HomeComponent}from'./home/home.component';
import{ZapatillasComponent}from'./zapatillas/zapatillas.component';
import{VideojuegoComponent}from'./videojuego/videojuego.component';
import{CursosComponent}from'./cursos/cursos.component';
import { CursosintensivosComponent } from './cursosintensivos/cursosintensivos.component';
//Array de rutas
// creamos una variables constante que va a ser de tipo ruta la cual debe cumplir el formato de rutas de angular
// la cual es un array quie por dentro tiene un json por cada ruta
const routes: Routes = [
//path: es la ruta, la cadena del navegador--- component: es el componente que va a cargar
// {path:'',Component:HomeComponent},
{path:'',pathMatch:'full',redirectTo:'home'},
{path:'zapatillas',component:ZapatillasComponent},
{path:'videojuego',component:VideojuegoComponent},
{path:'cursos',component:CursosComponent},
{path:'cursos/:cursosid',component:CursosComponent,children:[
  // aqui ingresamos una ruta hija que mostramos dentro de un html del padre y el padre se muestra dentro del general
  {path:'cursosintensivos',component:CursosintensivosComponent}
]},
//ruta 404 esta ruta se debe definir en caso de error o sino tod el sistema de rutas falla
{path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//clasem que se convierte en un modulo de anguñar