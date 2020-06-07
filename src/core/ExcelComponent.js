import {DOMListener} from '@core/DOMListener';

export class ExcelComponent extends DOMListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name || '';
        this.emmiter = options.emmiter;
        this.unsubscribers = [];

        this.prepare();
    }
    // setting our component before init
    prepare() {}

    // returned layout component
    toHTML() {
        return '';
    }

    // Attension listeners about event
    $emit(event, ...args) {
        this.emmiter.emit(event, ...args);
    }

    // Subscribe on event
    $on(event, fn) {
        const unsub = this.emmiter.subscribe(event, fn);
        this.unsubscribers.push(unsub);
    }

    // Init component
    // added DOM listeners
    init() {
        this.initDOMListeners();
    }

    // Remove component
    // Clear listeners
    destroy() {
        this.removeDOMListeners();
        this.unsubscribers.forEach(unsub => unsub());
    }
}
