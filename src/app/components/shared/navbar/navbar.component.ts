import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

    constructor(private _router: Router) { }

    ngOnInit(): void {
    }

    searchHero(searchValue: string) {
        console.log(`la busqueda es ${searchValue}`);
        this._router.navigate(['/search', searchValue]);
    }

}
