import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe.component';

@NgModule({
    declarations: [
        HeroeComponent
    ],
    exports:[
        HeroeComponent
    ],
    imports:[
        //este es un componente que me deja hacer directivas personalizadas de angular, como ngFor y ngIf
        CommonModule
    ]
})
export class HeroeModule {

}