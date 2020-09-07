export class Page {
    constructor(params) {
        this.params = params || Date.now().toString();
    }

    getRoot() {
        throw new Error('Mehod "getRoot" should be implemented');
    }

    afterRender() {}

    destroy() {}
}
