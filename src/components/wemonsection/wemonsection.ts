import { Component, HostListener } from '@angular/core';
import { Iproduct } from '../../Services/iproduct';
import { CurrencyPipe, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Carts } from '../../Service/carts';
@Component({
  selector: 'app-wemonsection',
  imports: [CurrencyPipe ,NgClass],
  templateUrl: './wemonsection.html',
  styleUrl: './wemonsection.css',
})
export class Wemonsection {
productList:Iproduct[];
productList2:Iproduct[];
Showmore:boolean=false;

backtotop:boolean=false;
@HostListener('window:scroll',[])
onWindowScroll(){
  this.backtotop =window.scrollY >200;
}
scrolltotop(){
  window.scrollTo({top:0,behavior:'smooth'})
  this.backtotop=false;
}
 ngOnInit() {
  [...this.productList, ...this.productList2].forEach(product => {
    const savedLike = localStorage.getItem('liked_' + product.id);
    product.liked = savedLike ? JSON.parse(savedLike) : false;
  });
}


constructor(private router:Router ,private CartService:Carts){
  this.productList=[{id:301,name:"Womens Dress",img:"4f53e50975c2dec7b88130c7e48bc894.jpg",price:84,liked:false},
{id:302,name:"Womens Dress",img:"461bd5ae64c47fc7d5fd1f20b32e5d78.jpg",price:68,liked:false},
{id:303,name:"Womens Dress",img:"p3.png",price:98,liked:false},
{id:304,name:"Womens Dress",img:"p4.png",price:82,liked:false},
{id:305,name:"Womens Dress",img:"p5.png",price:98,liked:false},
{id:306,name:"Womens Dress",img:"p6.png",price:77,liked:false}
]
this.productList2=[{id:307,name:"Women`s Dress",img:"p7.png",price:125,liked:false},
  {id:308,name:"Womens Dress",img:"26168bf53958ca24ea6a42766a5cf555.jpg",price:234,liked:false},
  {id:309,name:"Womens Dress",img:"c6bc5502ac7a274f880779d51d907384.webp",price:250,liked:false},
  {id:310,name:"Womens Dress",img:"PF1201-BLACK_1_284ceb59-738c-45df-9064-27a8c39831b1.jpg",price:200,liked:false},
  {id:311,name:"Womens Dress",img:"e0cddf24eebe0279c31c4af1b5f9bd2c.jpg",price:199,liked:false},
  {id:312,name:"Womens Dress",img:"p12.png",price:177,liked:false}
]
}
addProduct(product2:any){
  this.CartService.addtocart(product2);
  alert("Your Product was add to cart")

}
Show(){
  this.Showmore =! this.Showmore
}
toggleLike(product: any) {
  product.liked = !product.liked;

  localStorage.setItem(
    'liked_' + product.id,
    JSON.stringify(product.liked)
  );
}
 showDetails(product: {id:number, img:string, name:string }) {
    this.router.navigate(['/productdetails', product.id]);
  } 
}
