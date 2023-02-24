import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styles: [
    ]
})
export class SearchComponent implements OnInit {

    heroes: any[] = [];
    keyWord: string = '';
    nameSelected: string = '';

    constructor(private _activatedRoute: ActivatedRoute,
        private _heroesService: HeroesService,
        private _router: Router) {
    }

    ngOnInit(): void {
        this._activatedRoute.params.subscribe(params => {
            this.keyWord = params['keyWord'];
            this.heroes = this._heroesService.searchHeroe(this.keyWord);
            console.log(`heroes encontrados ${this.heroes}`);
        });
    }

    displayName(name: string) {
        this.nameSelected = name;
        console.log(`El último seleccionado es ${this.nameSelected}`);
    }

}
