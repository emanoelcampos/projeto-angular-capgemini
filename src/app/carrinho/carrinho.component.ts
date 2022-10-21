import { Component, OnInit } from '@angular/core';

import { IProdutoCarrinho } from './../produtos';
import { CarrinhoService } from './../carrinho.service';
@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: IProdutoCarrinho[] = [];

  constructor(
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
  }

}
