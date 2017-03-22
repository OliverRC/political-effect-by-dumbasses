// TODO: Add Angular import statements here...
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import {LandingComponent} from "./components/landing.component";
import { ChartsModule } from 'ng2-charts';
import { LineChartDemoComponent } from "./components/line-chart-demo"

@NgModule({
    bootstrap: [LandingComponent],
    imports: [BrowserModule, FormsModule, ChartsModule],
    declarations: [LandingComponent, LineChartDemoComponent]
})
export class AppModule{
}