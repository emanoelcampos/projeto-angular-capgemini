import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ProdutosService } from 'src/app/produtos.service';
import { NotificacaoService } from './../../notificacao.service';
import { CarrinhoService } from './../../carrinho.service';
import { IProduto, IProdutoCarrinho } from './../../produtos';


@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto: IProduto | undefined;

  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get('id'));
    console.log(produtoId)
    this.produto = this.produtosService.getOne(produtoId);
  }

  adicionarAoCarrinho() {
    this.notificacaoService.notificar('O produto foi adicionado ao carrinho')
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade

    }
    this.carrinhoService.adicionarCarrinho(produto);
  }

}
