import {Component,NgModule} from "@angular/core";

@Component({
    selector: "app",
    templateUrl: "app/landing.html"
})
export class LandingComponent{  

    public exchangeOption:string = "USD/GBP";
    public exchangeOptions:string[] = ["USD/GBP", "USD/ZAR", "GBP/ZAR"]

    constructor() {

    }
}