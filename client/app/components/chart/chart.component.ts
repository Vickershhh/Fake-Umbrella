import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart[]',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {

  barChartLabels: any;
  barChartData: any;
  @Input() chartList: object[];

  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public chartColors: Array<any> = [
    { // all colors in order
      backgroundColor: []
    }
  ]

  constructor() {
  }

  ngOnInit() {
    this.barChartLabels = [];
    this.barChartData = [
      {data: [], label: 'Number of Employees'}
    ];
    this.chartList.sort((a, b) => {
      if (Number(a["number"]) < Number(b["number"])) {
        return 1;
      }
      if (Number(a["number"]) > Number(b["number"])) {
        return -1;
      }
    });
    // console.log(this.chartList[0]);
    // console.log(this.chartList[0]["remove"]);
    let key: any;
    for(key in this.chartList[0]) {
      if(this.chartList.hasOwnProperty(key)) {
          console.log(this.chartList[key]);
      }
  }
    for (let i=0;i<4&&i<this.chartList.length;i++){
      this.barChartLabels.push(this.chartList[i]["name"]);
      this.barChartData[0]["data"].push(this.chartList[i]["number"]);
      if (this.chartList[i]["remove"] == true) {
        this.chartColors[0]["backgroundColor"].push("#FF0000")
      } else {
        this.chartColors[0]["backgroundColor"].push("#008000");
      }
    }
  }
}
