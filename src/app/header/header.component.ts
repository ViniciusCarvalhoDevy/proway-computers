import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    public carrinhoService: CarrinhoService,
   
    public router:Router
  ){}
  numberProductCar:number=1

  // goProducts() {
  //   this.router.navigate(['/produtos'], { queryParams: { descricao: "teclado" } });
  // }
}
