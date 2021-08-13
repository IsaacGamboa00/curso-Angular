import { CssSelector } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
    styleUrls: ['heroe.component.css']
})
export class HeroeComponent{

    heroes :string [] = ["spiderman","hulk","thor","capitan america","ironman"];
    heroeBorrado: string = "";
    div: boolean=true;

    //se puede declarar heroeBorrado : string | undefined; pero esto no se mira muy bien

    borrarHeroe(){
     this.heroeBorrado=this.heroes.shift() || "";
    }

    ocultar(){
        this.div=false;
    }

    mostrar(){
        this.div=true;
    }


}
