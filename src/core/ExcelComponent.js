import {DOMListener} from '@core/DOMListener';

export class ExcelComponent extends DOMListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name || '';
        this.emitter = options.emitter;
        this.subscribe = options.subscribe || [];
        this.store = options.store;
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
        this.emitter.emit(event, ...args);
    }

    // Subscribe on event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn);
        this.unsubscribers.push(unsub);
    }

    $dispatch(action) {
        this.store.dispatch(action);
    }

    // Only changes are going on here, in the lines that we subscribed to
    storeChanged() {}

    isWatching(key) {
        return this.subscribe.includes(key)
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
