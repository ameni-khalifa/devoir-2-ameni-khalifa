import { Routes } from '@angular/router';

import { Produitts } from './produitts/produitts';
import { AddProduit } from './add-produit/add-produit';

export const routes: Routes = [
  { path: 'produitts', component: Produitts },
  { path: 'add-produit', component: AddProduit },
  { path: '', redirectTo: 'produitts', pathMatch: 'full' }
];