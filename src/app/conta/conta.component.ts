import { Component, OnInit } from '@angular/core';
import { Conta } from '../models/conta';
import { ContaService } from '../conta.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  _contas: Conta[] = []
  paginaAtual: number =1;
  contador: number = 5;
  term: string;

  constructor(private contaService:ContaService) { }

  ngOnInit(): void {
    this.contaService.getContas()
    .subscribe(
      data => this._contas = data,
      error => alert('Erro ao acessar serviço de contas')
    );
  }
  public removerConta(conta: Conta) {

    if (conta.id > 0) {
      if (confirm("Deseja remover a conta " + conta.numeroConta + " agencia " + conta.agencia +"?")){
        this.contaService.removeConta(conta.id).subscribe(
          data => { alert("Conta removida com sucesso"); this._contas.splice(this._contas.indexOf(conta),1) },
          error => alert("Falha ao remover conta")
        )
      }

    }
  }
}
