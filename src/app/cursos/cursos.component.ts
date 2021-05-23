import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
//para obtener el numero op valor de la ruta dinamica de la url de bemos utilizar un objeto llamado 
//ActivateRoute como se observa enm el siguiente ejemplo

 cursosid:number;

  constructor(private activatedroute: ActivatedRoute) { 
    this.cursosid=0;
  }

  ngOnInit(): void {
    //atributo params este atributo nos permite escuchar las modificaciones de los params y traerlos
    this.activatedroute.params.subscribe(params=>{
      this.cursosid=params.cursosid
      console.log(params.cursosid);
      //traemos el parametro que hemos trraido en la ruta dinamica
      //con esto logramos obtener el objeto que se deduce en la url como dinamico
    })
  }

}
