import { Component } from '@angular/core';
import { Iblog } from '../../Services/iblog';
import { Icart } from '../../Services/icart';
import { ActivatedRoute } from '@angular/router';
 import { Carts } from '../../Service/carts';
import { CurrencyPipe, NgFor, NgForOf, NgIf } from '@angular/common';
@Component({
  selector: 'app-cart',
  imports: [NgForOf,CurrencyPipe ,NgIf],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
 
count: number | null = null;
 
constructor( private CartService:Carts){}
CartItems:Icart[]=[];
 
ngOnInit(){
 this.CartItems=this.CartService.getCartItems();
  this.CartItems.forEach(item=>{
    item.quntity=1;
  })
}
increase(item:Icart){
  if(item.quntity < 20){
    item.quntity++;
  }
}

decrease(item:Icart){
  if(item.quntity > 1){
    item.quntity--;
  }
}
getTotal(){
  let total = 0;

  this.CartItems.forEach(item=>{
    total += item.price * item.quntity;
  })

  return total;
}

deletItem(product2: Icart){
  this.CartService.removefromcart(product2);
}
pay(){
  alert("Your purchase was completed successfully ✅")
}
}
