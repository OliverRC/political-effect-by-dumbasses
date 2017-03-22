"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: Add Angular import statements here...
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const landing_component_1 = require("./components/landing.component");
const ng2_charts_1 = require("ng2-charts");
const line_chart_demo_1 = require("./components/line-chart-demo");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [landing_component_1.LandingComponent],
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, ng2_charts_1.ChartsModule],
        declarations: [landing_component_1.LandingComponent, line_chart_demo_1.LineChartDemoComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map