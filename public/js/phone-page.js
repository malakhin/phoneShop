'use strict';

//Содержит основной компонент

class PhonePage {
	constructor(options) {
		this._el = options.el;
		
		this._shoppingCart = new ShoppingCart({ 
			el: this._el.querySelector('[data-component="shoppingCart"]')
		});

		this._catalogue = new PhoneCatalogue({ 
			el: this._el.querySelector('[data-component="phoneCatalogue"]')
		});	

		//this._shoppingCart.addItem(1);

		setTimeout( () => {
			this._shoppingCart.addItem(1);
		}, 2000);

		setTimeout( () => {
			this._shoppingCart.addItem(2);
		}, 3000);

		setTimeout( () => {
			this._shoppingCart.addItem(3);
		}, 4000);
	}

}