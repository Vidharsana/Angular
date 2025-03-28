import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataApiService } from '../data-api.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-data',
  imports: [FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule],
  templateUrl: './list-data.component.html',
  styleUrl: './list-data.component.css'
})
export class ListDataComponent implements OnInit{

  products:Product[]=[];
  product:Product=new Product();
  deleteMessage=false;
  form:boolean=false;
  closeResult!:string;
mymodal: any;
  constructor(private productService:DataApiService, private modalService:NgbModal){

  }
  ngOnInit(): void {
    this.productService.findAll().subscribe(data=>{
      this.products=data;
    });
  }

  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(data=>{
      console.log(data);
      this.deleteMessage=true;
      this.productService.findAll().subscribe(data=>{
        this.products=data
      })
    },error=>console.log(error));
  }

  editProduct(id:number, product:Product){
    this.productService.updateProduct(id,product).subscribe();
  }

  open(content:any){
    this.modalService.open(content,{ariaLabelledBy:
      'modal-basic-title'}).result.then((result)=>{
        this.closeResult=`Closed with: ${result}`;
      }, (reason)=>{
        this.closeResult=`Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any):string{
    if(reason===ModalDismissReasons.ESC){
      return 'by pressing ESC';
    }else if(reason===ModalDismissReasons.BACKDROP_CLICK){
      return 'by clicking on a backdrop';
    }else{
      return `with: ${reason}`;
    }
  }
  closeForm(){
    
  }
  cancel(){
    this.form=false;
  }
}
