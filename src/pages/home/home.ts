import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



import { ProdutoProvider} from './../../providers/produto/produto'

import { FirebaseListObservable } from 'angularfire2/database'


import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public produtos : Observable<any[]>
  public produtosSemFiltro : Observable<any[]>
  public termoPesquisa : string

  constructor(public navCtrl: NavController, public produtoProvider : ProdutoProvider) {
    this.produtos = this.produtoProvider.list()
    this.produtosSemFiltro = this.produtos
  }

  pesquisar() {
  this.produtos = this.produtosSemFiltro.map(_item => _item.filter((item) => {
      return item.nome.toLowerCase().indexOf(this.termoPesquisa.toLowerCase()) > -1;
  }));}
}
