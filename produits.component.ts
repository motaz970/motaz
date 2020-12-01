import { Component, OnInit } from '@angular/core';
import{ produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
 
})
export class ProduitsComponent implements OnInit {



      constructor(private produitservice : ProduitService) {
       this.produits= produitservice.listeProduit();
        }
         


  ngOnInit(): void {

  }

}
