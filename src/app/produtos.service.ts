import { Injectable } from '@angular/core';
import { IProduto, produtos } from './item-produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
produtos:IProduto[] = produtos;
getAll(){
  return this.produtos;
}
getOne(produtoId:number){
  return this.produtos[produtoId]
}
  constructor() { }
}
