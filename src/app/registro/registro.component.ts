import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';  
import { Router } from '@angular/router';
import { ComponentService } from '../service/component.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})

export class RegistroComponent {
  viewModal: boolean = false;
  listUser: any[] = [];
  cadastroForm: FormGroup;

  
  //Aqui esta sendo injetado o serviço de 'rotas', 'FormBuilder' e 'ComponentService'
  // O serviço ComponentService contém a lógica 
  // A rota permite a navegação programática entre componentes 
  // O formBuilder são usados para gerenciar formulários.
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private meuServico: ComponentService ,
  ) {}

  //Esse método é responsável por criar ou inicializar algum tipo de cadastro dentro do componente.
  ngOnInit(){
    this.createCadastro();
  }

  //Aqui ele executa o modal quando cadastrado o usuario e envia o valor ao banco de dados
  //E reseta os inputs no final
  executarAcoesCadastro() {
    this.viewModal = true;
    this.meuServico.addUsuario(this.cadastroForm.value);
    this.cadastroForm.reset()
  }

  //Método de rota @angular/router
  irParaRota(rota: string): void {
    this.router.navigate([rota]);
  }

  //Criando os cadastros com itens obrigatórios utilizando o CadastroForm para pegar as informações
  private createCadastro() {  
    this.cadastroForm = this.fb.group({
      name: ['', Validators.required],   //validators é pra deixar algo obrigatorio, tem que ser importado
      lastName: [''],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    console.log(this.createCadastro)
  }

}
