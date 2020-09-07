import {Router} from './Router';
import {Page} from '../Page';

class DashboardPage extends Page {
    getRoot() {
        const root = document.createElement('div');
        root.innerHTML = 'dashboard';
        return root;
    }
}
class ExcelPAge extends Page {}

describe('Router:', () => {
    let router,
        $root;

    beforeEach(() => {
        $root = document.createElement('div');
        router = new Router($root, {
            dashboard: DashboardPage,
            excel: ExcelPAge,
        });
    });

    test('should be defined', () => {
       expect(router).toBeDefined(); 
    });

    test('should render Dashboard page', () => {
        router.changePageHandler();
        expect($root.innerHTML).toBe('<div>dashboard</div>')
    })
})