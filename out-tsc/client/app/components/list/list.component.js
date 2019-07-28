import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let ListComponent = class ListComponent {
    constructor() {
        this.deleteEvt = new EventEmitter();
        this.updateEvt = new EventEmitter();
        this.rainEvt = new EventEmitter();
    }
    deleteItem(theApt) {
        this.deleteEvt.emit(theApt);
    }
    handleUpdate(item, labelName, newValue) {
        item[labelName] = newValue;
        console.log(item);
        this.updateEvt.emit(item);
    }
    displayRainy() {
        this.rainEvt.emit();
    }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    Input()
], ListComponent.prototype, "dataList", void 0);
tslib_1.__decorate([
    Output()
], ListComponent.prototype, "deleteEvt", void 0);
tslib_1.__decorate([
    Output()
], ListComponent.prototype, "updateEvt", void 0);
tslib_1.__decorate([
    Output()
], ListComponent.prototype, "rainEvt", void 0);
ListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-list',
        templateUrl: './list.component.html'
    })
], ListComponent);
export { ListComponent };
//# sourceMappingURL=list.component.js.map