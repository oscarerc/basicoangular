import {Component,OnInit,DoCheck}from '@angular/core'
//este fiche tendra el import del component y el paquete en el que esta ubicado

//decorador
@Component({
    //etiqueta que vamos a utilizar para cargarlo en el html o app.component.html
 selector:'videojuego',
 //plantilla
 templateUrl:'/videojuego.component.html'
 
 
//ademas de eso podemos poner hojas de estilo no poner ;
})

//definimos la clase
export class VideojuegoComponent implements OnInit,DoCheck{
// definimos un metodo constructor 
//SE PUEDEN DEFINI9R PROPIEDADES QUE PODEMOS PASAR LUEGO A OTROS LADOS
public titulos:String;
constructor(){
    console.log("se ha cargado el componente")
    //AQUI LE DAMOS VALOR A LAS PROPIEDADES O INICALIZAMOS

    this.titulos=("INICIAANDO CON ANGULAR");  
}
//metodo de hook que se carga apenas se inicia el componente
ngOnInit(): void {
}
ngDoCheck(){
    console.log("do check ejecutandose en cada cambio");
}
}

//debemos importar en la clase pincipal app.module.ts