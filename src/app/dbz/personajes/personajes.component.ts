import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  //asi ya seria suficiente para poder pasar el arreglo, pero una buena practica es poder ambien pasarle el tipado
  @Input()
  personajes : Personaje[]=[];
  
}
