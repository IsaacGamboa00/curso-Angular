import { Component } from '@angular/core';

interface Personaje{
  nombre:string;
  poder:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {
personajes : Personaje[]=[
  {
    nombre: "Goku",
    poder: 15000
  },
  {
    nombre: "Vegetta",
    poder: 7500
  },
  {
    nombre: "Krillin",
    poder: 400
  }
];

nuevo: Personaje = {
  nombre: "",
  poder: 0
};
 

  agregar(){

    if(this.nuevo.nombre.trim().length == 0){
      return;
    }
    console.log("Se agrego: ",this.nuevo);
    this.personajes.push(this.nuevo);
    console.log("La lista esta: ",this.personajes);
    
    this.nuevo= {
      nombre: "",
      poder: 0
    };
  }

}

