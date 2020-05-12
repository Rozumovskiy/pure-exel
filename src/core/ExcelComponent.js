import {DOMListener} from '@core/DOMListener';

export class ExcelComponent extends DOMListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
    }

    // returned layout component
    toHTML() {
        return '';
    }

    init() {
        this.initDOMListeners()
    }
}
