import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditProduitComponent } from './add-edit-produit.component';
import { DialogModule } from 'primeng/dialog';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AddEditProduitComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    BrowserAnimationsModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    ToastModule
 
  ],
  exports:[AddEditProduitComponent]
})
export class AddEditProduitModule { }
