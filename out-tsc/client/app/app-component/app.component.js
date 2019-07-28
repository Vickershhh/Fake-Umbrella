import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { findIndex, remove } from 'lodash';
library.add(faPlus, faTimes);
let AppComponent = class AppComponent {
    constructor(http) {
        this.http = http;
        this.title = 'FakeU';
        this.APIkey = 'd81abeaa7e0d02c1404ce1f3171ef58c';
    }
    addEvt(info) {
        this.http.post('http://localhost:3000/add', info).subscribe((result) => {
            console.log(result);
            this.dataList.push(result);
        });
    }
    deleteEvt(item) {
        let id = item["_id"];
        this.http.delete('http://localhost:3000/delete/' + id).subscribe((result) => {
            console.log(result);
            this.dataList = remove(this.dataList, function (n) {
                return n["_id"] != result;
            });
        });
    }
    updateEvt(item) {
        this.http.put('http://localhost:3000/update', item).subscribe((result) => {
            console.log(result);
        });
    }
    displayRain() {
        console.log(this.dataList);
        this.dataList = remove(this.dataList, function (n) {
            return n["remove"] != true;
        });
    }
    test(id) {
        this.http.get('http://api.openweathermap.org/data/2.5/forecast?id=' + id + '&APPID=' + this.APIkey).subscribe(data => {
            let index = findIndex(this.dataList, { "cityId": id });
            let item;
            for (item = 0; item < data["list"].length; item++) {
                if (data["list"][item]["weather"][0]["main"] == "Rain") {
                    this.dataList[index]["remove"] = false;
                    this.dataList[index]["rainyTime"] = data["list"][item]["dt_txt"];
                    break;
                }
            }
        });
    }
    ngOnInit() {
        this.http.get('../assets/city.list.json').subscribe(data => {
            this.cityList = data;
            this.http.get('http://localhost:3000/data').subscribe(data => {
                this.dataList = data.map((item) => {
                    item["remove"] = true;
                    let index = findIndex(this.cityList, { "name": item["location"] });
                    if (index == -1) {
                        item.cityId = null;
                    }
                    else {
                        item.cityId = this.cityList[index]["id"];
                        this.test(item["cityId"]);
                    }
                    return item;
                });
                console.log(this.dataList);
                this.chartList = this.dataList;
                this.chartList.sort((a, b) => {
                    if (Number(a["number"]) < Number(b["number"])) {
                        return 1;
                    }
                    if (Number(a["number"]) > Number(b["number"])) {
                        return -1;
                    }
                });
                console.log(this.chartList);
            });
        });
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html'
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map