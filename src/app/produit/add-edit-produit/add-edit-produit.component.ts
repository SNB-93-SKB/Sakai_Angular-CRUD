import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProduitService } from '../produit.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-add-edit-produit',
  templateUrl: './add-edit-produit.component.html',
  styleUrls: ['./add-edit-produit.component.css']
})


export class AddEditProduitComponent implements OnInit, OnChanges{
  @Input() displayAddEditModal:boolean=true;
  @Input()  selectedProduit: any=null;
  @Output()clickAddEdit:EventEmitter<any>=new EventEmitter<any>();
  @Output() clickClose:EventEmitter <boolean>=new EventEmitter<boolean>();
 modalType="ajouter";
  produitForm =this.fb.group({
title:["", Validators.required],
price:["0",Validators.required],
description:[""],
category:["",Validators.required],
image:["",Validators.required]
  });
  constructor ( private fb: FormBuilder, private produitService:ProduitService,
    private messageService: MessageService){


  }
  
  ngOnInit(): void {
    
  }
  ngOnChanges():void {
    if (this.selectedProduit) {
      this.modalType='modifier';
     this.produitForm.patchValue(this.selectedProduit);
    }else{
     this.produitForm.reset();
     this.modalType='ajouter'
    }
   }
  closeModal(){
this.produitForm.reset();
this.clickClose.emit(true);

  }
  addEditProduit(){

this.produitService.addEditProduit(this.produitForm.value,this.selectedProduit).subscribe(
  Response=>{
this.clickAddEdit.emit(Response);
this.closeModal();
const msg=this.modalType==='ajouter'? 'produit ajouter':'produit modifier';
this.messageService.add({
  severity :'success', 
  summary :'success', 
  detail:msg});

  },
  error=>{
this.messageService.add({
  severity :'error',
  summary:'error',
  detail : error});

console.log('erreur persistante');
  }
)
  }
 
}
