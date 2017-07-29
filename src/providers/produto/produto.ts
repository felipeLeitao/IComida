import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the ProdutoProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProdutoProvider {

  constructor(public afd: AngularFireDatabase) {

  }

  list(){
    return this.afd.list('/produtos/')
  }

}
