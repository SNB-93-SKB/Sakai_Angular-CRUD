import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitComponent } from './produit.component';
import{HttpClientModule}from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import{ConfirmationService}from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { AddEditProduitModule } from './add-edit-produit/add-edit-produit.module';
import { FilterProjectComponent } from './filter-project/filter-project.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProduitComponent,
    FilterProjectComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    AddEditProduitModule,
    MessagesModule,
  
    ConfirmDialogModule,
    DropdownModule,
    FormsModule
  
  ],
  exports:[
    ProduitComponent
  ],
  providers:[MessageService,ConfirmationService]
})
export class ProduitModule { }
