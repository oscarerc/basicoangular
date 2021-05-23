//este es el que se ejecuta del app.component.html
import { Component } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primerangular';

  //metodo para navegar mediante botones
constructor(private router:Router){
}
onclick(pRuta: string){
  //teras previas
  console.log('se realizan las tareas previas');
  this.router.navigate([pRuta]);
}
}
