'use strict';

class PhoneCatalogue {
	constructor(options) {
		this._el = options.el;
        this._phones = options.phones || [];

		this._render();

		this._el.addEventListener('click', this._onPhoneItemClick.bind(this));
	}

	setData(phones) {
	    this._phones = phones;
	    this._render();
    }

	on(eventName, handler) {
	    this._el.addEventListener(eventName, handler);
    }

    off(eventName, handler) {
        this._el.removeEventListener(eventName, handler);
    }

	_trigger(eventName, data) {
        let myEvent = new CustomEvent(eventName, {
            detail: data
        });

        this._el.dispatchEvent(myEvent);
    }

	_render() {
        let template = document.querySelector('#phone-catalogue-template').innerHTML;
		let compiled = _.template(template);

        this._el.innerHTML = compiled({
            phones: this._phones
        });
	}

	_onPhoneItemClick(event) {
		let phoneItemLink = event.target.closest('[data-element="phoneItemLink"]');

		if(!phoneItemLink) {
			return;
		}

        let selectedPhoneItem = phoneItemLink.closest('[data-element="phoneItem"]');

		this._trigger('phoneSelected', selectedPhoneItem.dataset.phoneId);
	}
}
