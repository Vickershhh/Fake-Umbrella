import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
let AddComponent = class AddComponent {
    constructor() {
        this.addEvt = new EventEmitter();
        this.showForm = true;
    }
    toggleAptDisplay() {
        this.showForm = !this.showForm;
    }
    handleAdd(formInfo) {
        const tempItem = {
            name: formInfo.name,
            contact: formInfo.contact,
            location: formInfo.location,
            num: formInfo.num,
            tel: formInfo.tel
        };
        this.addEvt.emit(tempItem);
        this.showForm = !this.showForm;
    }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    Output()
], AddComponent.prototype, "addEvt", void 0);
AddComponent = tslib_1.__decorate([
    Component({
        selector: 'app-add',
        templateUrl: './add.component.html'
    })
], AddComponent);
export { AddComponent };
//# sourceMappingURL=add.component.js.map