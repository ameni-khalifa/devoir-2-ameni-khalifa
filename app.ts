
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddProduit } from './add-produit/add-produit';
import { Produitts } from './produitts/produitts';

@Component({
  imports: [RouterOutlet, AddProduit, Produitts],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  afficherFormulaire = false;

  afficher() {
    this.afficherFormulaire = true;
  }

}