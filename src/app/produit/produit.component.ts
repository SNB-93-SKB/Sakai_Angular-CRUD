import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProduitService } from './produit.service';
import { Produit } from './produit';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit , OnDestroy{
  produits:Produit[]=[];
  displayAddEditModal=false;
  selectedProduit:any = null;
   subscriptions: Subscription[]=[];
  pdtSubscription:Subscription=new Subscription();
constructor(private produitService: ProduitService,
  private confirmationService :ConfirmationService,
  private messageService: MessageService){

}
  ngOnInit(): void {
    this.getProduitList()
  }
  getProduitList(category?:string){
    this.pdtSubscription=this.produitService.getProduits(category || "").subscribe(
      Response=>{
      this.produits= Response;
      }
    );
    this.subscriptions.push(this.pdtSubscription)
  }
  showAddModal(){
this.displayAddEditModal=true
this.selectedProduit=null;
  }
  hideAddModal(isClose:boolean){
    this.displayAddEditModal=! isClose;
  }
  saveOrUpdateProduitList(newData:any){
    // if (newData.id===this.selectedProduit.id) {
    //   const produitIndex=this.produits.findIndex(data=>data.id===newData.id);
    // this.produits[produitIndex]=newData;
    // }else{
    //   this.produits.unshift(newData);
    // }
    // this.produits.unshift(newData);
    // this.getProduitList();
  }
  showEditModal(produit: Produit){
this.displayAddEditModal=true
this.selectedProduit=produit;

  }
  deleteProduit(produit:Produit){
this.confirmationService.confirm({
  message: 'Êtes vous sûres de supprimer?',
  accept: ()=>{
this.produitService.deleteProduit(produit.id).subscribe(
  Response=>{
    //this.getProduitList();
    this.produits=this.produits.filter(data=>data.id!==produit.id);
  this.messageService.add({
    severity :'supprimer', 
    summary :'supprimer', 
    detail:'suppression réussir'});
  },
  error=>{
    this.messageService.add({
      severity :'error', 
      summary :'Error', 
      detail:error});
  }
  
)
  }
});
  }
  getProduitsByCategory(category:string){
this.getProduitList(category)

  }
  ngOnDestroy():void{
this.subscriptions.forEach(sub=>sub.unsubscribe());
  }
}
