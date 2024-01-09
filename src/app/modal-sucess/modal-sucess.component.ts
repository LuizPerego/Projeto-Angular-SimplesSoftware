import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-sucess',
  templateUrl: './modal-sucess.component.html',
  styleUrls: ['./modal-sucess.component.scss']
})
export class ModalSucessComponent {
  @Output()
  fechar: EventEmitter<void> = new EventEmitter();

  fecharModal(){
    this.fechar.emit();
  }

}
