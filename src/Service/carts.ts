import { Injectable } from '@angular/core';
import { Icart } from '../Services/icart';

@Injectable({
  providedIn: 'root',
})
export class Carts {
  CartItems:Icart[]=[];
  addtocart(product2:Icart){
    this.CartItems.push(product2);
    localStorage.setItem('cart',JSON.stringify(this.CartItems));
  }
 removefromcart(product2: Icart){
  const index = this.CartItems.findIndex(item => item.id === product2.id);
  if(index > -1){
    this.CartItems.splice(index, 1);
  }
  localStorage.setItem('cart',JSON.stringify(this.CartItems));
}
  getCartItems():Icart[]{
const data =localStorage.getItem('cart');
if(data){
  this.CartItems=JSON.parse(data)
}
return this.CartItems;
  }
}
