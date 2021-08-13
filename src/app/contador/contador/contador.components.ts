import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>Acumulador</h1>
        <button (click)="acumular(base)">
        +{{base}}
        </button>

        <h3> 
        la base es <strong>{{base}}</strong> 
        </h3>

        <h4>{{numero}}</h4>

        <button (click)="acumular(-base)">
        -{{base}}
        </button>
    `
})
export class ContadorComponent {
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