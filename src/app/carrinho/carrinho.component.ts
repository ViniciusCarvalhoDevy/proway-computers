import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../item-produtos/produtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  total =0
  public itensCarrinho: IProdutoCarrinho[] =[]
constructor(
  public carrinhoService : CarrinhoService,
  private route:Router
  ){}
ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
   this.calcularTotal()
  }
  removeProdutoCarrinho(id:number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !==id);
    this.carrinhoService.removeProdutoCarrinho(id)
    this.calcularTotal()
  }

calcularTotal(){
  this.total = this.itensCarrinho.reduce((prev,curr) => prev +(curr.preco * curr.quantidade),0)
}
comprar(){
  alert("Parabéns, Você finalizou a sua compra!")
  this.carrinhoService.clearCarrinho();
  this.route.navigate(["produtos"]);
}
}
