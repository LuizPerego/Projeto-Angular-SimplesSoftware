import { Component, Input } from '@angular/core';
import { ComponentService } from '../service/component.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent {

  //Cria uma lista para armazenar as informaçoes recuperadas no service
  @Input()
  list: any = [];

  // A list esta sendo inicializada com o resultado de getLista
  //Isso é um exemplo de injeção de dependência "corntructor(.......)"
  constructor (private meuServiço: ComponentService){
    this.list = meuServiço.getLista();
  }

  // tENTAR USAR O ONINIT, SERIA O CORRETO PRA GRANDES PROJETOS 


}
