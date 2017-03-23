import { Component, NgModule } from "@angular/core";
import { ChartsModule } from "ng2-charts";
require("node_modules/chart.js/dist/Chart.js")

export class ExchangeRateData
{
    constructor( public data:Array<number>, public labels:Array<string>) { }
}

@Component({
    selector: "app",
    templateUrl: "app/landing.html"
})
export class LandingComponent {

    public exchangeRates:{ [rate:string]: ExchangeRateData } = {};

    public currentOption: string = "USDGBP";
    public exchangeOptions: string[] = ["USDGBP", "USDZAR", "GBPZAR"];

    public currentData: Array<any> = [{ data: [], label: "no selection" }];

    public currentLabels: Array<any>= ['11:05', '11:10', '11:15', '11:20', '11:25', '11:30', '11:35'];

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
        this.exchangeRates["USDZAR"] = new ExchangeRateData([65, 59, 80, 81, 56, 55, 40], ['11:05', '11:10', '11:15', '11:20', '11:25', '11:30', '11:35'])
        this.exchangeRates["GBPZAR"] = new ExchangeRateData([65, 59, 80, 81, 56, 55, 40], ['11:05', '11:10', '11:15', '11:20', '11:25', '11:30', '11:35'])
    
        this.currentData = [{ data: this.exchangeRates[this.currentOption].data, label: this.currentOption }];
    }

    onExchangeOptionChange():void
    {
       this.currentData = [{ data: this.exchangeRates[this.currentOption].data, label: this.currentOption }];
    }

    trump():void{

      if(this.currentOption !== "USDGBP")
      {     
          return;
      } 

      let exchangeRateData = this.exchangeRates["USDGBP"];

      let data = exchangeRateData.data;
      let lastValue:number = data[data.length-1];

      let delta = Math.random()/50;
      console.log(delta);
      lastValue -= delta;

      var currentdate = new Date();
      var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();

     exchangeRateData.labels.push(datetime);
     this.currentLabels.push(datetime);

     exchangeRateData.data.push(lastValue);

     this.currentData = [{ data:exchangeRateData.data, label: this.currentOption }];
    }

    zuma():void{

    }

    brexit():void{

    }
}
