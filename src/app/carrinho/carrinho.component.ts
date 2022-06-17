import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: IProdutoCarrinho[] = []
  total: number = 0

  constructor(
    public carrinho: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinho.obtemCarrinho()
    this.calcularTotal()
  }

  removeProdutoCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId)
    this.carrinho.removerDoCarinho(produtoId)
    this.calcularTotal()
  }

  calcularTotal() {
    this.total = this.itensCarrinho.reduce((prev, curr) => (prev + curr.preco * curr.quantidade), 0)
  }

  comprar() {
    alert("Parabéns, você finalizou a sua compra")
    this.carrinho.limparCarrinho()
    this.router.navigate(["produtos"])
  }

}
