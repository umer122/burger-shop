import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
@Input() burgers:any=[];
@Input() Drinks:any=[];

  constructor() { }

  ngOnInit(): void {
  }
  

  // myDate=Date.now();
  // productName:any="";
  // menuList(event:any){
  //   this.productName =event.target.value 
  // }
  // addItem(index:any) {
  //   var currentElement = this.Drinks[index];  
  //   this.burgers.splice(index, 0, currentElement);
  // }
  
}
