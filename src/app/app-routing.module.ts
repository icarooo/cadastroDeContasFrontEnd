import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadContaComponent } from './cad-conta/cad-conta.component';
import { ContaComponent } from './conta/conta.component';

const routes: Routes = [
  { path: 'contas', component: ContaComponent },
  { path: 'cadconta', component: CadContaComponent },
  { path: 'cadconta/:id', component: CadContaComponent },
  { path: '', component: ContaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
