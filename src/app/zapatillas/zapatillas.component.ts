// la extension ts no hace falta ponerla ya que el lo toma como si la tuviera

import { Component, OnInit } from '@angular/core';
import { objetozapatillas } from '../models/objetozapatillas'
  ;
@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css']
})

export class ZapatillasComponent implements OnInit {
  //creamos la proopiedad titulo para instanciar en el componente html
  public titulo="zapatillas disponibles";
  //creamos lun array de la propiedad objetozapatillas
  public zapatillas: Array<objetozapatillas>;
  //constructor objetozapatillas
  public mi_marca: String;
  //array de marcas
public marcas:String[];
  constructor() {
    //inicializamos en el constructor la propiedad zapatilla
    this.zapatillas = [
      //creamos un objeto
      new objetozapatillas('Rebook Classic', 'Reebok', 'blanca', 80, true),
      new objetozapatillas('Rebook GOLD', 'Reebok', 'blanca', 800, true)
    ];
    //inicializon del nuevo array marcas
this.marcas=new Array();
    this.mi_marca="oscar"
  }

  ngOnInit(){
    console.log(this.zapatillas);
  }

  getmarca(){
    alert(this.mi_marca);
  }

  addmarca(){
// aqui agregamos una nueva marca al array a diferencia de js
this.marcas.push(this.mi_marca)

  }

}
