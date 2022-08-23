import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdotarComponent } from './adotar/adotar.component';
import { ApadrinharComponent } from './apadrinhar/apadrinhar.component';
import { ContatoComponent } from './contato/contato.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { 
  path: '', 
  redirectTo: '/home', 
  pathMatch: 'full'
  },
  { 
    path: '', 
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'adotar',
        component: AdotarComponent
      },
      {
        path: 'apadrinhar',
        component: ApadrinharComponent
      },
      {
        path: 'contato',
        component: ContatoComponent
      },
      {
        path: 'detalhes',
        component: DetalhesComponent
      }
    ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
