import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-hero-card',
	templateUrl: './hero-card.component.html',
	styles: [
	]
})
export class HeroCardComponent implements OnInit {

	@Input() hero: any = {};
	@Input() parent: string = '';
	@Input() keyWord: string = '';
	@Output() lastNameEvent: EventEmitter<string>;

	constructor(private _router: Router) {
		this.lastNameEvent = new EventEmitter();
	}

	ngOnInit(): void {
	}

	viewHero() {
		this._router.navigate(['/heroe', this.hero.id, this.parent, this.keyWord]);
		this.lastNameEvent.emit(this.hero.nombre);
		console.log(`El heroe es ${this.hero}`);
	}

}
