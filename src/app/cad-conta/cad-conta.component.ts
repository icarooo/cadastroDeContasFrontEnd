import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Conta } from '../models/conta';
import { ContaService } from '../conta.service';
import { DatePipe } from '@angular/common';
import { Bancos } from '../models/banco';

@Component({
  selector: 'app-cad-conta',
  templateUrl: './cad-conta.component.html',
  styleUrls: ['./cad-conta.component.css']
})
export class CadContaComponent implements OnInit {
  _conta: Conta;
  _bancos: any;
  public nomeBanco: any;
  registerForm: FormGroup;
  id: number;
  constructor( private datePipe: DatePipe,private fb: FormBuilder,private route: ActivatedRoute,private contaService:ContaService) {
  
  }

  public onOptionsSelected(event: any) {
    var codBanco = event.target.value;
    var nomeBanco = this._bancos.find((c: { compensacao: any; }) => c. compensacao == codBanco)
    this.nomeBanco = nomeBanco;
    this.registerForm.patchValue({
      nomeBanco: nomeBanco.banco
    })
    console.log(codBanco +' ' + nomeBanco.banco)
  }
  getBancos() {
    this.contaService.getBancos().subscribe(
      (res: Bancos) => {
        this._bancos = res.listaBancos;
        console.log(res)
      }
    )

  }
  ngOnInit(): void {
    this.getBancos();
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      if (this.id != 0 && this.id != null) {
        this.contaService.getContaById(this.id)
        .subscribe(
          (res: Conta ) => { 
             this.validar(res); 
            } ,
          error => console.log('Erro ao acessar serviço' + error)
        );
      }
    });

    this.validar(this._conta);
  }

 validar(conta: Conta) {
    this.registerForm = this.fb.group({
      numeroConta: [conta?.numeroConta, [Validators.required]],
      agencia: [conta?.agencia, [Validators.required]],
      cpfCnpj: [conta?.cpfCnpj, [Validators.required]],
      nome: [conta?.nome, [Validators.required]],
      dataAbertura: [conta?.dataAbertura ? this.datePipe.transform(conta.dataAbertura, 'dd/MM/yyyy') : null , [Validators.required]],
      ativo: [conta?.ativo ? true : false],
      codBanco: [conta?.codBanco, [Validators.required]],
      nomeBanco: [conta?.nomeBanco, [Validators.required]],

    })
  }

  salvar() {
   
    this._conta = this.registerForm.value;
    this._conta.id = this.id;
    var dateTemp = this._conta.dataAbertura.toString().split("/");
    this._conta.dataAbertura = new Date(dateTemp[1] + "/" + dateTemp [0] + "/" + dateTemp[2]);
    //this._conta.dataAbertura = this.datePipe.transform(this._conta.dataAbertura, 'MM/dd/yyyy');
    console.log(this._conta)
    this.contaService.gravarconta(this._conta).subscribe(
      (res) => {
        alert("Dados salvos com sucesso!");
        console.log(res)
      },
      error => {
        alert("Falha ao salvar dados: " + error);
      }
    )
  }
}
