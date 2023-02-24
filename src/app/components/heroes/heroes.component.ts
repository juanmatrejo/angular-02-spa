import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

    heroes: Heroe[] = [];
    nameSelected: string = '';

    constructor(private _heroesService: HeroesService,
        private _router: Router) {
        console.log('constructed');
    }

    ngOnInit() {
        this.heroes = this._heroesService.getHeroes();
        console.log(`todos los heroes ${this.heroes} y selected is ${this.nameSelected}`);
    }

    displayName(name: string) {
        this.nameSelected = name;
        console.log(`El último seleccionado es ${this.nameSelected}`);
    }

}
