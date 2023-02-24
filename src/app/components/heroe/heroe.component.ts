import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styles: [],
})
export class HeroeComponent {

    heroe: any = {};
    parent: string = '';
    keyWord: string = '';

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _heroesService: HeroesService
    ) {
        this._activatedRoute.params.subscribe((params) => {
            console.log(params);
            let id = params['id'];
            this.parent = params['parent'];
            this.keyWord = params['keyWord'];
            console.log(`el id es ${id}, el padre es ${this.parent} y la búsqueda es ${this.keyWord}`);
            this.heroe = _heroesService.getHeroe(id);
        });
    }
}
