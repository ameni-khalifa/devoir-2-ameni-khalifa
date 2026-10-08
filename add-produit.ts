import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { produit } from '../model/produit.model';
import { Produit } from '../model/service/produit';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-add-produit',
  templateUrl: './add-produit.html',
})
export class AddProduit implements OnInit {

  newproduit = new produit();

  message = '';

  constructor(private produitservice: Produit) {
  }

  ngOnInit(): void {
  }

  addproduit() {

    this.produitservice.addProduit(this.newproduit);

    this.message =
      "produit " +
      this.newproduit.idproduit +
      " ajoute avec succes !";

  }

}