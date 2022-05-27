import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Burger_shop';
  myDate=Date.now();
  product:any;
  listItems: any=[];
  netTotal: any;
  ngOnInit(){
    // this.product=JSON.parse(localStorage.getItem('Menulist'))
    this.product=(localStorage.getItem('Menulist'))
    console.log('helo')
  }
  


  //-----------Quantity Increase----------
  increment(list:any){
    list.quantity++;
  }
  decrement(list:any){
    if (list.quantity>1){
      list.quantity--
      
    }    
    }

//---------- Function Add Item----------
  onAddCart(value:any){
    this.product =value;
    if(this.listItems.indexOf(this.product)===-1)
    {
      console.log(this.listItems)
      this.listItems.push(this.product);
      localStorage.setItem('Menulist',JSON.stringify(this.product))

    }
    else{
      value.quantity++;
    }
  }
  deleteLocalStorage(){
    localStorage.removeItem('Menulist')
  }

//------------ITEMS NAMES--------------
  burgers=[
    {name:"The Ben Jovi 🍔 ",price:"220", quantity: 1},
    {name:"Burger N Bite 🍔 ",price:"300", quantity: 1},
    {name:"The Ice Bug 🍔 ",price:"400", quantity: 1},
    {name:"The Grill Thrill 🍔 ",price:"520", quantity: 1},
 
  ]
  shawarma=[
    {name:"Veggie Grill Shwarma 🥙",price:"220", quantity: 1},
    {name:"Green Affair Shwarma 🥙 ",price:'300', quantity: 1},
    {name:"Sunflower Shwarma 🥙  ",price:'400', quantity: 1},
    {name:"Native Bun Shwarma 🥙  ",price:'520', quantity: 1},
  ]
pasta=[
  {name:'orzo Soup Pasta',price:'350', quantity: 1},
  {name:'Macroni pasta',price:'380', quantity: 1},
  {name:'lasagna pasta',price:'330', quantity: 1},
]

Drinks=[
  {name:'Mineral Water',price:'70', quantity: 1},
  {name:'Cold Drink',price:'130', quantity: 1},
  {name:'Choclate Shake',price:'250', quantity: 1},
  {name:'Oero Shake',price:'250', quantity: 1},
]



}
