import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-filter-project',
  templateUrl: './filter-project.component.html',
  styleUrls: ['./filter-project.component.css']
})
export class FilterProjectComponent implements OnInit {
  @Output() selectedCategory: EventEmitter<string> = new EventEmitter<string>();
  selecteCategory: string='';
  categories:string []=[];

  constructor(private produitService :ProduitService){

  }
  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
this.produitService.getCategories().subscribe(
  Response=>{
    this.categories=Response;
  }
)
  }
  onChangeCategory($event:any){
  this.selectedCategory.emit($event.value)  ;

  }
}
