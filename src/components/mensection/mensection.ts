import { Component, HostListener } from '@angular/core';
import { Iproduct } from '../../Services/iproduct';
import { CurrencyPipe, NgClass } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Carts } from '../../Service/carts';

@Component({
  selector: 'app-mensection',
  imports: [CurrencyPipe,NgClass,RouterModule],
  templateUrl: './mensection.html',
  styleUrl: './mensection.css',
})
export class Mensection {
MenList:Iproduct[];
MenList2:Iproduct[];
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
  [...this.MenList, ...this.MenList2].forEach(men => {
    const savedLike = localStorage.getItem('liked_' + men.id);
    men.liked = savedLike ? JSON.parse(savedLike) : false;
  });
}
constructor(private router:Router ,private CartService:Carts){
  this.MenList=[{id:201,name:"Men`s T-Shirt",img:"p1.png",price:84,liked:false},
{id:202,name:"Men`s T-Shirt",img:"p2.png",price:68,liked:false},
{id:203,name:"Men`s Jacket",img:"3c60bd2295101dfc9219a0445f318576.webp",price:98,liked:false},
{id:204,name:"Men`s Jacket",img:"559d4721e724a7a5892c96fc93a3e11a.jpg",price:82,liked:false},
{id:205,name:"Men`s Jacket",img:"572b502bed8300bab1140d6420d38b9a.jpg",price:98,liked:false},
{id:206,name:"Men`s Jacket",img:"b24024e36f8848d899e618b8ec308681.jpg",price:77,liked:false}
]
this.MenList2=[{id:207,name:"Men`s Jacket",img:"c6be105d8a2a7f84a0c6478b3b3b63bc.jpg",price:125,liked:false},
  {id:208,name:"Men`s T-Shirt",img:"p8.png",price:234,liked:false},
  {id:209,name:"Men`s T-Shirt",img:"p9.png",price:250,liked:false},
  {id:210,name:"Men`s T-Shirt",img:"p10.png",price:200,liked:false},
  {id:211,name:"Men`s T-Shirt",img:"p11.png",price:199,liked:false},
  {id:212,name:"Men`s Jacket",img:"cafd6f865c0c4b49ab46e621e6338f94.jpg",price:177,liked:false}
]
}
addProduct(product2:any){
  this.CartService.addtocart(product2);
  alert("Your Prouct Was add to cart")
}
Show(){
  this.Showmore =! this.Showmore
}
toggleLike(men: any) {
  men.liked = !men.liked;

  localStorage.setItem(
    'liked_' + men.id,
    JSON.stringify(men.liked)
  );
}
showDetails(men: {id:number, img:string, name:string }) {
    this.router.navigate(['/productdetails', men.id]);
  } 

}

