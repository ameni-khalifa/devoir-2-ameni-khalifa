import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Produit } from '../model/service/produit';
import { produit } from '../model/produit.model';

@Component({
  selector: 'app-produitts',
  imports: [DatePipe],
  templateUrl: './produitts.html',
  styleUrl: './produitts.css'
})
export class Produitts {

  produit!: any[];

  constructor(private produitservice: Produit) {
    this.produit = this.produitservice.listeproduit();
  }

  supprimerproduit(p: produit) {
    let conf =confirm("etes-vous sur?");
    if(conf)
      this.produitservice.supprimerproduit(p);
  }

}