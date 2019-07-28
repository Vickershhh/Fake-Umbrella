import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let ChartComponent = class ChartComponent {
    constructor() {
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
    }
    processInput() {
        console.log(this.chartList);
    }
    ngOnInit() {
        setTimeout((500), {
            this: .processInput()
        });
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
        ];
    }
};
tslib_1.__decorate([
    Input("chartList")
], ChartComponent.prototype, "chartList", void 0);
ChartComponent = tslib_1.__decorate([
    Component({
        selector: 'app-chart',
        templateUrl: './chart.component.html'
    })
], ChartComponent);
export { ChartComponent };
//# sourceMappingURL=chart.component.js.map