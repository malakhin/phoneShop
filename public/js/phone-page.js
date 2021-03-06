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

        this._catalogue.on('phoneSelected', event => {
            this._shoppingCart.addItem(event.detail)
        });
    }
}