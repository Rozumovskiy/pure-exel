import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {resizeHandler} from './table.resize';
import {shouldResize} from './table.functions';

export class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor($root) {
        super($root, {
           listeners: ['mousedown', 'mousemove', 'mouseup']
        })
      }

    toHTML() {
        return createTable();
    }

    onMousedown(event) {
      if (shouldResize(event)) {
        resizeHandler(this.$root, event);
      }
    }

    onMousemove(event) {
      if (this.true) {
        console.log(event);
      }
    }

    onMouseup(event) {
      if (this.true) {
        this.true = false;
        console.log('onMouseup');
      }
    }
}
