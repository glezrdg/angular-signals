import { Routes } from '@angular/router';
import {
  CatalogoComponent,
  CatalogoDetailComponent,
  HistoricoComponent,
  HomeComponent,
  OdsComponent,
} from './modules';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'catalogo',
    component: CatalogoComponent,
  },
  {
    path: 'catalogo/:id',
    component: CatalogoDetailComponent,
  },
  {
    path: 'historico',
    component: HistoricoComponent,
  },
  {
    path: 'ods',
    component: OdsComponent,
  },
];
