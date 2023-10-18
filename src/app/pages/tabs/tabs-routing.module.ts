import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'consejos',
        children: [
          {
            path: '',
            loadChildren: () => import('../consejos/consejos.module').then( m => m.ConsejosPageModule)
          }
        ]
      },
      {
        path: 'conceptos',
        children: [
          {
            path: '',
            loadChildren: () => import('../conceptos/conceptos.module').then( m => m.ConceptosPageModule)
          }
        ]
      },
      {
        path: 'metodos',
        children: [
          {
            path: '',
            loadChildren: () => import('../metodos/metodos.module').then( m => m.MetodosPageModule)
          }
        ]
      },
      {
        path: 'favoritos',
        children: [
          {
            path: '',
            loadChildren: () => import('../favoritos/favoritos.module').then( m => m.FavoritosPageModule)
          }
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
          }
        ]
      },
      {
        path: 'detalle/:id',
        children: [
          {
            path: '',
            loadChildren: () => import('../detalle/detalle.module').then( m => m.DetallePageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
