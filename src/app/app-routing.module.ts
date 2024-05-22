import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { authGuard } from './guards/auth.guard';
import { ListaComponent } from './components/lista/lista.component';

const routes: Routes = [
  {   
    path: 'login',
    component: LoginComponent
 },
 {   
    path: 'register',
    component: RegisterComponent
 },
 {   
    path: 'home',
    component: HomeComponent
 },
 {   
   path: 'produtos',
   component: ProdutosComponent,
   canActivate: [authGuard]
},
{   
   path: 'lista',
   component: ListaComponent,
},
 {   
    path: '', redirectTo: 'home', pathMatch: 'full'
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
