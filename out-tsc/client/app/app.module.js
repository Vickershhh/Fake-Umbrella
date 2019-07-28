import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { ChartComponent } from './components/chart/chart.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            AddComponent,
            ListComponent,
            ChartComponent,
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            FormsModule,
            FontAwesomeModule,
            HttpClientModule,
            ChartsModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map