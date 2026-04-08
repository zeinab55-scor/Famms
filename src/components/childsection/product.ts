import { Component, HostListener } from '@angular/core';
import { Iproduct } from '../../Services/iproduct';
import { CurrencyPipe, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Carts } from '../../Service/carts';
@Component({
  selector: 'app-product',
  imports: [CurrencyPipe ,NgClass],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
productList:Iproduct[];
productList2:Iproduct[];
Showmore:boolean=false;
 ngOnInit() {
  [...this.productList, ...this.productList2].forEach(product => {
    const savedLike = localStorage.getItem('liked_' + product.id);
    product.liked = savedLike ? JSON.parse(savedLike) : false;
  });
}
backtotop:boolean=false;
@HostListener('window:scroll',[])
onWindowScroll(){
  this.backtotop =window.scrollY >200;
}
scrolltotop(){
  window.scrollTo({top:0,behavior:'smooth'})
  this.backtotop=false;
}

constructor(private router:Router,private CartService:Carts){
  this.productList=[{id:401,name:"Girl`s Outtfet",img:"16c62a7d11342e0df4308f5050fb3262.jpg",price:84,liked:false},
{id:402,name:"Boy`s Outtfet",img:"365d199609f0b090c767721a4289ef26.jpg",price:68,liked:false},
{id:403,name:"Boy`s Outtfet",img:"53f7dca12fd8e901b8cbb12bbbf1ec00.jpg",price:98,liked:false},
{id:404,name:"Girl`s Outtfet",img:"31fe97ee702bef6f9750d30f466d8a3b.jpg",price:82,liked:false},
{id:405,name:"Boy`s Outtfet",img:"481faebe0f6372ca9da9eca2d2bca6a7.jpg",price:98,liked:false},
{id:406,name:"Girl`s Outtfet",img:"95b03fc45f86bdd48c8df553aa47d24e.jpg",price:77,liked:false}
]
this.productList2=[{id:407,name:"Boy`s Outfet",img:"3570fdb3de3a1e4580fd0c88cd40295a.jpg",price:125,liked:false},
  {id:408,name:"Girl`s Outtfet",img:"6504139c56db8b858691e602c30257a8.jpg",price:234,liked:false},
  {id:409,name:"Boy`s Outtfet",img:"81350ed292d1a0788fb60b1ef66b3241.jpg",price:250,liked:false},
  {id:410,name:"Girl`s Outtfet",img:"a9632b4d9f9fbf0121d6232bb5cfb472.jpg",price:200,liked:false},
  {id:411,name:"Boy`s Outtfet",img:"5629937c0e80566a8663f7506a40d254.jpg",price:199,liked:false},
  {id:412,name:"Girl`s Outtfet",img:"bb3875e72b85878990e9b6d51533a234.jpg",price:177,liked:false}
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
showDetails(products: {id:number, img:string, name:string }) {
    this.router.navigate(['/productdetails', products.id]);
  } 
}
