import { IProduto } from './../../produtos';
import { Component, OnInit } from '@angular/core';

import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
