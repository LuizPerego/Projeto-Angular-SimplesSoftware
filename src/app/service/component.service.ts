import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  private listUser: any[] = [];
 
  //Pega a informaçao pelo addUsuario no registro.ts e adiciona a lista listUser
  addUsuario(usuario: any) {
    this.listUser.push(usuario);
  }
  // Ele retorna o listUser e deixa pronto para o uso na tabela
  getLista(): any[] {
    return this.listUser;
  }
}