import { Component,HostListener,OnInit } from '@angular/core';
import { Iproduct } from '../../Services/iproduct';
import { CurrencyPipe, NgClass } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {  Carts } from '../../Service/carts';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [CurrencyPipe,NgClass , RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
productList:Iproduct[];
productList2:Iproduct[];
Showmore:boolean=false;
backtotop:boolean=false;
 ngOnInit() {
  [...this.productList, ...this.productList2].forEach(product => {
    const savedLike = localStorage.getItem('liked_' + product.id);
    product.liked = savedLike ? JSON.parse(savedLike) : false;
  });
 
 
}

@HostListener('window:scroll',[])
onWindowScroll(){
  this.backtotop =window.scrollY >200;
}
sceolltop(){
  window.scrollTo({top:0,behavior:'smooth'});
  this.backtotop=false;
}

constructor(private router:Router ,private CartService:Carts,private route:ActivatedRoute){
  this.productList=[{id:1,name:"Men`s T-Shirt",img:"p1.png",price:184,liked:false},
{id:2,name:"Men`s T-Shirt",img:"p2.png",price:168,liked:false},
{id:3,name:"Women`s Dress",img:"p3.png",price:198,liked:false},
{id:4,name:"Women`s Dress",img:"p4.png",price:182,liked:false},
{id:5,name:"Women`s Dress",img:"p5.png",price:198,liked:false},
{id:6,name:"Women`s Dress",img:"p6.png",price:177,liked:false}
]
this.productList2=[{id:7,name:"Women`s Dress",img:"p7.png",price:125,liked:false},
  {id:8,name:"Men`s T-Shirt",img:"p8.png",price:234,liked:false},
  {id:9,name:"Men`s T-Shirt",img:"p9.png",price:250,liked:false},
  {id:10,name:"Men`s T-Shirt",img:"p10.png",price:200,liked:false},
  {id:11,name:"Men`s T-Shirt",img:"p11.png",price:199,liked:false},
  {id:12,name:"Women`s Dress",img:"p12.png",price:177,liked:false}
]
}
addProduct(product2:any){
  this.CartService.addtocart(product2);
  alert("Your Prouct Was add to cart")
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
 showdetails(product2:{id:number})
 {
  this.router.navigate(['/productdetails',product2.id])


 }

ScrollToSection(SectionId:string){
  const element =document.getElementById(SectionId)
  if(element){
    element.scrollIntoView({behavior:"smooth"})
  }
}
}
