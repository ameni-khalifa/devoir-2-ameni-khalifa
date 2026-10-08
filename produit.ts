import { Injectable } from '@angular/core';
import { produit } from '../produit.model';

@Injectable({
  providedIn: 'root'
})
export class Produit {

  produit: produit[];

  constructor() {

    this.produit = [

      {
        idproduit: 1,
        nomproduit: "pc asus",
        prixproduit: 3000.600,
        datecreation: new Date("01/14/2011")
      },

      {
        idproduit: 2,
        nomproduit: "imprimante epson",
        prixproduit: 450,
        datecreation: new Date("12/17/2010")
      },

      {
        idproduit: 3,
        nomproduit: "tablette samsung",
        prixproduit: 900.123,
        datecreation: new Date("02/20/2020")
      }

    ];

  }

  listeproduit() {
    return this.produit;
  }

  addProduit(produit: produit) {
    this.produit.push(produit);
  }

  supprimerproduit(prod: produit) {
    const index = this.produit.indexOf(prod, 0);

    if (index > -1) {
      this.produit.splice(index, 1);
    }
  }

}




