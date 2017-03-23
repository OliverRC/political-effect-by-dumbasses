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
class ExchangeRateData {
    constructor(data, labels) {
        this.data = data;
        this.labels = labels;
    }
}
exports.ExchangeRateData = ExchangeRateData;
let LandingComponent = class LandingComponent {
    constructor() {
        this.exchangeRates = {};
        this.currentOption = "USDGBP";
        this.exchangeOptions = ["USDGBP", "USDZAR", "GBPZAR"];
        this.currentData = [{ data: [], label: "no selection" }];
        this.currentLabels = ['11:05', '11:10', '11:15', '11:20', '11:25', '11:30', '11:35'];
        this.lineChartOptions = {
            responsive: true,
            defaultFontColor: '#fff',
            global: { defaultFontColor: '#fff' },
            legend: { labels: { fontColor: '#fff' } }
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(25,151,198,0.1)',
                borderColor: 'rgba(25,151,198,1)',
                pointBackgroundColor: 'rgba(25,151,198,1)',
                pointBorderColor: '#1997c6',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(25,151,198,0.8)'
            }
        ];
        this.exchangeRates["USDGBP"] = new ExchangeRateData([0.79898, 0.8005, 0.80188, 0.79823, 0.78811, 0.79875, 0.81247], ['11:05', '11:10', '11:15', '11:20', '11:25', '11:30', '11:35']);
        this.exchangeRates["USDZAR"] = new ExchangeRateData([65, 59, 80, 81, 56, 55, 40], ['11:05', '11:10', '11:15', '11:20', '11:25', '11:30', '11:35']);
        this.exchangeRates["GBPZAR"] = new ExchangeRateData([65, 59, 80, 81, 56, 55, 40], ['11:05', '11:10', '11:15', '11:20', '11:25', '11:30', '11:35']);
        this.currentData = [{ data: this.exchangeRates[this.currentOption].data, label: this.currentOption }];
    }
    onExchangeOptionChange() {
        this.currentData = [{ data: this.exchangeRates[this.currentOption].data, label: this.currentOption }];
    }
    trump() {
        if (this.currentOption !== "USDGBP") {
            return;
        }
        let exchangeRateData = this.exchangeRates["USDGBP"];
        let data = exchangeRateData.data;
        let lastValue = data[data.length - 1];
        let delta = Math.random() / 50;
        console.log(delta);
        lastValue -= delta;
        var currentdate = new Date();
        var datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
        exchangeRateData.labels.push(datetime);
        this.currentLabels.push(datetime);
        exchangeRateData.data.push(lastValue);
        this.currentData = [{ data: exchangeRateData.data, label: this.currentOption }];
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