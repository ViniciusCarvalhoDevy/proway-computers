import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { IProduto, IProdutoCarrinho, produtos } from 'src/app/item-produtos/produtos';
import { NotificacaoService } from 'src/app/notificacao.service';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit{
  produtosTest:IProduto [] =produtos;
  produto:IProduto | undefined;
  quantidade= 1;
  constructor(private produtosService: ProdutosService,
    private route:ActivatedRoute,
    private notificationService: NotificacaoService,
    private carrinhoService:CarrinhoService
    ){}

  ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      const produtoId = Number(routeParams.get("id"));
      this.produto = this.produtosService.getOne(produtoId-1) 
    
    }
    addCarrinho(){
        this.notificationService.notification("O Produto Foi Adicionado Ao Carrinho")
        const produto:IProdutoCarrinho = {
          ...this.produto!,
          quantidade: this.quantidade,
        }
        this.carrinhoService.addCarrinho(produto)
      }

}
