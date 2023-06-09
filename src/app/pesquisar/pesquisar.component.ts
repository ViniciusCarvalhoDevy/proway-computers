import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent {
  descricao =""
  constructor(
    private router:Router
  ){}
  pesquisar(){
    if(this.descricao){
      this.router.navigate(["produtos"], {queryParams:{descricao:this.descricao}})
    return;
    }
    this.router.navigate(["produtos"])
  }
}
