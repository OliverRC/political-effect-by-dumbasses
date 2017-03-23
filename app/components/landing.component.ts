import { Component, NgModule } from "@angular/core";
require("node_modules/chart.js/dist/Chart.js")

@Component({
    selector: "app",
    templateUrl: "app/landing.html"
})
export class LandingComponent {

    public exchangeOption: string = "USD/GBP";
    public exchangeOptions: string[] = ["USD/GBP", "USD/ZAR", "GBP/ZAR"];

    public lineChartData: Array<any> = [{ data: [65, 59, 80, 81, 56, 55, 40], label: this.exchangeOption }];

    public lineChartLabels: Array<any> = ['11:05', '11:10', '11:15', '11:20', '11:25', '11:30', '11:35'];

    public lineChartOptions: any = { responsive: true };

    public lineChartColors: Array<any> = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];

    constructor() {

    }

    trump():void{
      let data = this.lineChartData[0].data;
      let lastValue:number = data[data.length-1];


      let delta = Math.floor(Math.random() * 6) + 1;
      console.log(delta);
      lastValue -= delta;

      var currentdate = new Date();
      var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();

      this.lineChartLabels.push(datetime);

      data.push(lastValue);
      this.lineChartData = [{ data: data, label: this.exchangeOption }];
    }

    zuma():void{

    }

    brexit():void{

    }
}
