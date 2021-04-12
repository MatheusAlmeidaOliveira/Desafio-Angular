import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { ListaUsuarioComponent } from './usuarios/lista-usuario/lista-usuario.component';
import { ListaFotoComponent } from './fotos/lista-foto/lista-foto.component';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'usuarios', component: ListaUsuarioComponent, canActivate : [AuthGuard]},
    { path: 'fotos', component: ListaFotoComponent, canActivate : [AuthGuard]}
];

@NgModule({  
    imports: [RouterModule.forRoot(rootRouterConfig)],  
    exports: [RouterModule]  
 })  
 export class AppRouterModule { }