import { Component } from '@angular/core';
import { Personaje } from "./../interfaces/dbz.interfaces";



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
  nombre: "picollo",
  poder: 1000
};
 


}

