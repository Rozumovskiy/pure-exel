export class Page {
    constructor(params) {
        this.params = params;
    }

    getRoot() {
        throw new Error('Mehod "getRoot" should be implemented');
    }

    afterRender() {}

    destroy() {}
}
