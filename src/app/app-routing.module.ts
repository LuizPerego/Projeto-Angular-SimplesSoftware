import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { TabelaComponent } from './tabela/tabela.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  
  {
    path: '' , // Primeira pagina nao precisa preencher , pode ficar só ''
    component: PrincipalComponent,
  },
  {
    path: 'registro' , 
    component: RegistroComponent,
  },
  {
    path: 'tabela' ,
    component: TabelaComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
