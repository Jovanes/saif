import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import {TelainicialComponent} from './telainicial/telainicial.component';
import { SolicitarComponent } from './solicitar/solicitar.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'telainicial', component: TelainicialComponent},
  {path: 'solicitar', component: SolicitarComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
