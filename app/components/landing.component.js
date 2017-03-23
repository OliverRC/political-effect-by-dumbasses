"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
require("node_modules/chart.js/dist/Chart.js");
let LandingComponent = class LandingComponent {
    constructor() {
        this.exchangeOption = "USD/GBP";
        this.exchangeOptions = ["USD/GBP", "USD/ZAR", "GBP/ZAR"];
        this.lineChartData = [{ data: [65, 59, 80, 81, 56, 55, 40], label: this.exchangeOption }];
        this.lineChartLabels = ['11:05', '11:10', '11:15', '11:20', '11:25', '11:30', '11:35'];
        this.lineChartOptions = { responsive: true };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
    }
    trump() {
        let data = this.lineChartData[0].data;
        let lastValue = data[data.length - 1];
        let delta = Math.floor(Math.random() * 6) + 1;
        console.log(delta);
        lastValue -= delta;
        var currentdate = new Date();
        var datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
        this.lineChartLabels.push(datetime);
        data.push(lastValue);
        this.lineChartData = [{ data: data, label: this.exchangeOption }];
    }
    zuma() {
    }
    brexit() {
    }
};
LandingComponent = __decorate([
    core_1.Component({
        selector: "app",
        templateUrl: "app/landing.html"
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);
exports.LandingComponent = LandingComponent;
//# sourceMappingURL=landing.component.js.map