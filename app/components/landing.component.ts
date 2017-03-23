import { Component, NgModule } from "@angular/core";
import { ChartsModule } from "ng2-charts";
require("node_modules/chart.js/dist/Chart.js")

export class ExchangeRateData {
    constructor(public data: Array<number>, public labels: Array<string>) { }
}

@Component({
    selector: "app",
    templateUrl: "app/landing.html"
})
export class LandingComponent {

    public exchangeRates: { [rate: string]: ExchangeRateData } = {};

    public currentOption: string = "USDGBP";
    public exchangeOptions: string[] = ["USDGBP", "USDZAR", "GBPZAR"];

    public currentData: Array<any> = [{ data: [], label: "no selection" }];

    public currentLabels: Array<any> = ['11:05', '11:10', '11:15', '11:20', '11:25', '11:30', '11:35'];

    public lineChartOptions: any =
    {
        responsive: true,
        defaultFontColor: '#fff',
        global: { defaultFontColor: '#fff' },
        legend: { labels: { fontColor: '#fff' } }
    };

    public lineChartColors: Array<any> = [
        {
            backgroundColor: 'rgba(25,151,198,0.1)',
            borderColor: 'rgba(25,151,198,1)',
            pointBackgroundColor: 'rgba(25,151,198,1)',
            pointBorderColor: '#1997c6',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(25,151,198,0.8)'
        }
    ];

    constructor() {

        this.exchangeRates["USDGBP"] = new ExchangeRateData([0.79898, 0.8005, 0.80188, 0.79823, 0.78811, 0.79875, 0.81247], ['11:05', '11:10', '11:15', '11:20', '11:25', '11:30', '11:35'])
        this.exchangeRates["USDZAR"] = new ExchangeRateData([16.12, 15.32, 14.5, 13.21, 13.01, 12.9, 12.45], ['11:05', '11:10', '11:15', '11:20', '11:25', '11:30', '11:35'])
        this.exchangeRates["GBPZAR"] = new ExchangeRateData([24.12, 23.54, 21.7, 22.12, 18.21, 16.75, 15.58], ['11:05', '11:10', '11:15', '11:20', '11:25', '11:30', '11:35'])

        this.emptyLabels();
        this.fillLabels(this.exchangeRates[this.currentOption].labels);

        this.currentData = [{ data: this.exchangeRates[this.currentOption].data, label: this.currentOption }];        
    }

    onExchangeOptionChange(): void {

        this.emptyLabels();
        this.fillLabels(this.exchangeRates[this.currentOption].labels);

        this.currentData = [{ data: this.exchangeRates[this.currentOption].data, label: this.currentOption }];
    }

    trump(): void {

       this.effectExchange("USDGBP", ()=> (Math.random()/50)*-1);
       this.effectExchange("USDZAR", ()=> (Math.random()/2)*-1);

    }

    zuma(): void {

       this.effectExchange("USDZAR", ()=> Math.random());
       this.effectExchange("GBPZAR", ()=> Math.random()/2);

    }

    brexit(): void {

       this.effectExchange("USDGBP", ()=> Math.random()/50);
       this.effectExchange("GBPZAR", ()=> (Math.random()*2)*-1);

    }

    private fillLabels(labels:string[]){
        for(var label in labels) {
            this.currentLabels.push(label);
        }
    }

    private emptyLabels(){
        while(this.currentLabels.length > 0) {
            this.currentLabels.pop();
        }
    }

    private effectExchange(option:string, deltaAmount:() => number) {
        if (this.currentOption !== option) {
            return;
        }

        let exchangeRateData = this.exchangeRates[option];

        let data = exchangeRateData.data;
        let lastValue: number = data[data.length - 1];

        let delta = deltaAmount();
        console.log(delta);
        lastValue += delta;

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
}
