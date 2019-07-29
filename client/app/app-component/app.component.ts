import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTimes, faPlus} from '@fortawesome/free-solid-svg-icons';
import {findIndex, remove} from 'lodash';


library.add(faPlus, faTimes);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  title = 'Fake Umbrella System';
  dataList: object[];
  cityList: object[];
  chartList: object[];
  APIkey = 'd81abeaa7e0d02c1404ce1f3171ef58c';
  
  constructor(private http:HttpClient){
    this.chartList = [];
  }

  addEvt(info: Object){
    this.http.post<Object>('http://localhost:3000/add',info).subscribe((result) => {
      this.dataList.push(result);
    })
  }

  deleteEvt(item : Object) {
    let id = item["_id"];
    this.http.delete<Object>('http://localhost:3000/delete/' + id).subscribe((result) => {
      
      this.dataList = remove(this.dataList, function(n) {
        return n["_id"] != result; 
      })
    })
  }

  updateEvt(item:Object) {
    this.http.put<Object>('http://localhost:3000/update',item).subscribe((result) => {
      
    })
  }
  
  displayRain() {
    this.dataList = remove(this.dataList, function(n) {
      return n["remove"] != true; 
    })
  }

  testRain(id: number) {
    this.http.get('http://api.openweathermap.org/data/2.5/forecast?id='+ id + '&APPID=' + this.APIkey).subscribe(data =>{
      let index = findIndex(this.dataList,{"cityId": id});
      let item: any;
      for (item = 0; item < data["list"].length; item++) {
        if (data["list"][item]["weather"][0]["main"] == "Rain") {
          this.dataList[index]["remove"] = false;
          this.dataList[index]["rainyTime"] = data["list"][item]["dt_txt"];
          break;
        }
      }
    })
  }

  ngOnInit(): void {
    this.http.get<Object[]>('../assets/city.list.json').subscribe(data =>{
      this.cityList = data;
      this.http.get<Object[]>('http://localhost:3000/data').subscribe(data =>{
        this.dataList = data.map((item:any) => {
          item["remove"] = true;
          let index = findIndex(this.cityList,{"name": item["location"]});
          if (index == -1) {
            item.cityId = null;
          } else{
            item.cityId = this.cityList[index]["id"];
            this.testRain(item["cityId"]);
          }
          return item;
        });
      });
    });
  }
}
