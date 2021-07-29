import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Curso-Angular';
  public numero:number = 10;
  public base:number = 5;

  contar (valor:number){
    this.numero+=valor;
  }

  acumular(valor:number){
    this.numero+=valor;
  }



  
}

