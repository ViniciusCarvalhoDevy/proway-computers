import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './item-produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] =[]

  constructor() { }
  obterCarrinho(){
    const carrinho = JSON.parse( localStorage.getItem("carrinho") || "[]")
    return carrinho;
  }
  addCarrinho(produto:IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho",JSON.stringify(this.itens))
  
  }
  clearCarrinho(){
    this.itens = [];
    localStorage.clear();
  }
  removeProdutoCarrinho(id:number){
    this.itens = this.itens.filter(item => item.id !== id)
    localStorage.setItem("carrinho",JSON.stringify(this.itens))
  }
}
