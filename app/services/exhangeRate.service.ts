import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ExchangeService {

  constructor(private af: AngularFire) {

  }

  public getExchangeRateData(rate:string) : FirebaseListObservable<any[]> {
    return this.af.database.list(`/${rate}`);
  }
}
