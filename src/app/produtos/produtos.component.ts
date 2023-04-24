import { Component, OnInit } from '@angular/core';
import { IProduto, produtos } from '../item-produtos/produtos';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{
produtos:IProduto[] | undefined ;
constructor(
  private produtoSevice:ProdutosService,
  private route:ActivatedRoute
  ){}

ngOnInit(): void {
  const produtos =  this.produtoSevice.getAll(); 
  this.route.queryParamMap.subscribe(params =>{
    const descricao = params.get("descricao")?.toLowerCase();
   
    if (descricao){
          this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao))
          return;
    }
    this.produtos = produtos;
   })
}
}
