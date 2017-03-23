// TODO: Add Angular import statements here...
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import {LandingComponent} from "./components/landing.component";
import { ChartsModule } from 'ng2-charts';
import { AngularFireModule } from 'angularfire2';
import { ExchangeService } from './services/exhangeRate.service';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyBLgmCfECNXnAf6uWi5Z5YL7hlkrnUyGvQ',
  authDomain: 'politicaleffectbydumbasses.firebaseio.com',
  databaseURL: 'https://politicaleffectbydumbasses.firebaseio.com/'
};

@NgModule({
    bootstrap: [LandingComponent],
    imports: [BrowserModule, FormsModule, ChartsModule, AngularFireModule.initializeApp(firebaseConfig), ExchangeService],
    declarations: [LandingComponent]
})
export class AppModule{
}
