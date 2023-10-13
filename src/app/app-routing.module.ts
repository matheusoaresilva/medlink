import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RedefinirSenhaUsuarioComponent } from './pages/redefinir-senha-usuario/redefinir-senha-usuario.component';

const routes: Routes = [
  {
    path: '', // Rota raiz
    redirectTo: '/login', // Redireciona para a rota de login
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'password_reset',
    component: RedefinirSenhaUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
