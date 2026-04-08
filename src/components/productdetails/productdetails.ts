import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Iproduct } from '../../Services/iproduct';
import { Iproduct2 } from '../../Services/iproduct2';
import { CurrencyPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { size } from '../../directive/size';
import e from 'express';
import { Ireview } from '../../Services/ireview';
import { FormsModule } from '@angular/forms';
import { Ifaq } from '../../Services/ifaq';
import { Carts } from '../../Service/carts';
@Component({
  selector: 'app-productdetails',
  imports: [RouterModule, CurrencyPipe, NgIf, NgFor, size,FormsModule,DatePipe],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css',
})
export class Productdetails implements OnInit {
services?:Iproduct2;
 today=new Date();
name:string='';
comment:string='';
curentcomment:any=null
showcomment:boolean=false;
showinputs:boolean=true;
backtotop:boolean=false;
size:string='';
count: number | null = null;
rates:number=0
numbers:number[]=[0,1,2,3,4,5];
selectedReview: string = 'All Review';
 showreview:boolean=false;
showfaq:boolean=false;
@HostListener('window:scroll',[])
onWindowScroll(){
  this.backtotop =window.scrollY >200;
}
scrolltotop(){
  window.scrollTo({top:0,behavior:'smooth'})
  this.backtotop=false;
}
product2:Iproduct2[]=[{id:1,img:"p1.png",name:"Men`s T-Shirt",price:184,discount:200,precentage:40,info:"High quality cotton t-shirt for men",rate:0,colors:['black','gray','blue']},
{id:2,img:"p2.png",name:"Men`s T-Shirt",price:168,discount:200,precentage:40,info:"High quality cotton t-shirt for men",rate:0,colors:['black','red','blue']},
{id:3,img:"p3.png",name:"Women`s Dress",price:198,discount:200,precentage:40,info:"High quality cotton Dress for Women",rate:0,colors:['black','gray','red']},
{id:4,img:"p4.png",name:"Women`s Dress",price:182,discount:200,precentage:40,info:"High quality cotton Dress for Women",rate:0,colors:['black','gray','red']},
{id:5,img:"p5.png",name:"Women`s Dress",price:198,discount:200,precentage:40,info:"High quality cotton Dress for Women",rate:0,colors:['black','gray','red']},
{id:6,img:"p6.png",name:"Women`s Dress",price:177,discount:200,precentage:40,info:"High quality cotton Dress for Women",rate:0,colors:['black','gray','red']},
{id:7,img:"p7.png",name:"Women`s Dress",price:125,discount:200,precentage:40,info:"High quality cotton Dress for Women",rate:0,colors:['black','gray','red']},
{id:8,img:"p8.png",name:"Men`s T-Shirt",price:234,discount:300,precentage:40,info:"High quality cotton t-shirt for men",rate:0,colors:['black','gry','Brown']},
{id:9,img:"p9.png",name:"Men`s T-Shirt",price:250,discount:280,precentage:40,info:"High quality cotton t-shirt for men",rate:0,colors:['red','green','black']},
{id:10,img:"p10.png",name:"Men`s T-Shirt",price:200,discount:300,precentage:40,info:"High quality cotton t-shirt for men",rate:0,colors:['red','green','black']},
{id:11,img:"p11.png",name:"Men`s T-Shirt",price:199,discount:200,precentage:40,info:"High quality cotton t-shirt for men",rate:0,colors:['black','red','Burgundy']},
{id:12,img:"p12.png",name:"Women`s Dress",price:177,discount:200,precentage:40,info:"High quality cotton Dress for Women",rate:0,colors:['black','gray','red']},


]
products:Iproduct2[]=[{id:401,img:"16c62a7d11342e0df4308f5050fb3262.jpg",name:"Girl`s Outtfet",price:150,discount:200,precentage:40,info:"High quality cotton Outfet for childeran",rate:0,colors:['brown','white','black']},
{id:402,img:"365d199609f0b090c767721a4289ef26.jpg",name:"Boy`s Outtfet",price:233,discount:345,precentage:40,info:"High quality cotton Outfet for childeran",rate:0,colors:['black','blue','green']},
{id:403,img:"53f7dca12fd8e901b8cbb12bbbf1ec00.jpg",name:"Boy`s Outtfet",price:555,discount:777,precentage:40,info:"High quality cotton Outfet for childeran",rate:0,colors:['Gray 🇺🇸','gray','black']},
{id:404,img:"31fe97ee702bef6f9750d30f466d8a3b.jpg",name:"Girl`s Outtfet",price:222,discount:446,precentage:40,info:"High quality cotton Outfet for childeran",rate:0,colors:['orange','yellow','black']},
{id:405,img:"481faebe0f6372ca9da9eca2d2bca6a7.jpg",name:"Boy`s Outtfet",price:234,discount:356,precentage:40,info:"High quality cotton Outfet for childeran",rate:0,colors:['brown','green','black']},
{id:406,img:"95b03fc45f86bdd48c8df553aa47d24e.jpg",name:"Girl`s Outtfet",price:222,discount:333,precentage:40,info:"High quality cotton Outfet for childeran",rate:0,colors:['pink','white','black']},
{id:407,img:"3570fdb3de3a1e4580fd0c88cd40295a.jpg",name:"Boy`s Outtfet",price:345,discount:462,precentage:40,info:"High quality cotton Outfet for childeran",rate:0,colors:['brown','Beige','black']},
{id:408,img:"6504139c56db8b858691e602c30257a8.jpg",name:"Girl`s Outtfet",price:123,discount:234,precentage:40,info:"High quality cotton Outfet for childeran",rate:0,colors:['brown','Beige','black']},
{id:409,img:"81350ed292d1a0788fb60b1ef66b3241.jpg",name:"Boy`s Outtfet",price:133,discount:135,precentage:40,info:"High quality cotton Outfet for childeran",rate:0,colors:['red','green','black']},
{id:410,img:"a9632b4d9f9fbf0121d6232bb5cfb472.jpg",name:"Girl`s Outtfet",price:100,discount:135,precentage:40,info:"High quality cotton Outfet for childeran",rate:0,colors:['pink','white','black']},
{id:411,img:"5629937c0e80566a8663f7506a40d254.jpg",name:"Boy`s Outtfet",price:100,discount:156,precentage:40,info:"High quality cotton Outfet for childeran",rate:0,colors:['pink','red','black']},
{id:412,img:"bb3875e72b85878990e9b6d51533a234.jpg",name:"Girl`s Outtfet",price:333,discount:555,precentage:40,info:"High quality cotton Outfet for childeran",rate:0,colors:['brown','Beige','black']},
]
product:Iproduct2[]=[{id:301,img:"4f53e50975c2dec7b88130c7e48bc894.jpg",name:"Womens Dress",price:255,discount:88,precentage:40,info:"High quality cotton Dress for Women",rate:0,colors:['black','gray','red']},
{id:302,img:"461bd5ae64c47fc7d5fd1f20b32e5d78.jpg",name:"Women`s Dress",price:535,discount:88,precentage:40,info:"High quality cotton Dress for Women",rate:0,colors:['black','gray','red']},
{id:303,img:"p3.png",name:"Womens Dress",price:525,discount:88,precentage:50,info:"High quality cotton Dress for Women",rate:0,colors:['black','gray','red']},
{id:304,img:"p4.png",name:"Womens Dress",price:155,discount:88,precentage:66,info:"High quality cotton Dress for Women",rate:0,colors:['black','gray','red']},
{id:305,img:"p5.png",name:"Womens Dress",price:355,discount:88,precentage:60,info:"High quality cotton Dress for Women",rate:0,colors:['black','gray','red']},
{id:306,img:"p6.png",name:"Womens Dress",price:555,discount:88,precentage:20,info:"High quality cotton Dress for Women",rate:0,colors:['black','gray','red']},
{id:307,img:"p7.png",name:"Womens Dress",price:655,discount:88,precentage:39,info:"High quality cotton Dress for Women",rate:0,colors:['black','gray','red']},
{id:308,img:"26168bf53958ca24ea6a42766a5cf555.jpg",name:"Womens Dress",price:755,discount:88,precentage:29,info:"High quality cotton Dress for Women",rate:0,colors:['black','gray','red']},
{id:309,img:"c6bc5502ac7a274f880779d51d907384.webp",name:"Womens Dress",price:465,discount:88,precentage:19,info:"High quality cotton Dress for Women",rate:0,colors:['black','gray','red']},
{id:310,img:"PF1201-BLACK_1_284ceb59-738c-45df-9064-27a8c39831b1.jpg",name:"Womens Dress",price:234,discount:88,precentage:29,info:"High quality cotton Dress for Women",rate:0,colors:['black','gray','red']},
{id:311,img:"e0cddf24eebe0279c31c4af1b5f9bd2c.jpg",name:"Womens Dress",price:120,discount:88,precentage:59,info:"High quality cotton Dress for Women",rate:0,colors:['black','gray','red']},
{id:312,img:"p12.png",name:"Womens Dress",price:155,discount:88,precentage:69,info:"High quality cotton Dress for Women",rate:0,colors:['black','gray','red']},

]
men:Iproduct2[]=[
  {id:201,img:"p1.png",name:"Men`s Shirt",price:100,discount:250,precentage:40,info:"High quality cotton t-shirt for men",rate:0,colors:['black','gray','blue']},
  {id:202,img:"p2.png",name:"Men`s Shirt",price:100,discount:250,precentage:40,info:"High quality cotton t-shirt for men",rate:0,colors:['black','red','blue']},
  {id:203,img:"3c60bd2295101dfc9219a0445f318576.webp",name:"Men`s Jacket",price:100,discount:250,precentage:40,info:"High quality cotton Jacket for men",rate:0,colors:['black','Beige','Brown']},
  {id:204,img:"559d4721e724a7a5892c96fc93a3e11a.jpg",name:"Men`s Jacket",price:100,discount:250,precentage:40,info:"High quality cotton  Jacket for men",rate:0,colors:['black','Beige','Brown']},
  {id:205,img:"572b502bed8300bab1140d6420d38b9a.jpg",name:"Men`s Jacket",price:100,discount:250,precentage:40,info:"High quality cotton  Jacket for men",rate:0,colors:['black','Teal','Green']},
  {id:206,img:"b24024e36f8848d899e618b8ec308681.jpg",name:"Men`s Jacket",price:100,discount:250,precentage:40,info:"High quality cotton  Jacket for men",rate:0,colors:['black','Beige','Brown']},
  {id:207,img:"c6be105d8a2a7f84a0c6478b3b3b63bc.jpg",name:"Men`s Jacket",price:100,discount:250,precentage:40,info:"High quality cotton  Jacket for men",rate:0,colors:['black','Beige','Brown']},
  {id:208,img:"p8.png",name:"Men`s Shirt",price:100,discount:250,precentage:40,info:"High quality cotton t-shirt for men",rate:0,colors:['black','gry','Brown']},
  {id:209,img:"p9.png",name:"Men`s Shirt",price:100,discount:250,precentage:40,info:"High quality cotton t-shirt for men",rate:0,colors:['black','red','blue']},
  {id:210,img:"p10.png",name:"Men`s Shirt",price:100,discount:250,precentage:40,info:"High quality cotton t-shirt for men",rate:0,colors:['black','green','blue']},
  {id:211,img:"p11.png",name:"Men`s Shirt",price:100,discount:250,precentage:40,info:"High quality cotton t-shirt for men",rate:0,colors:['black','red','Burgundy']},
  {id:212,img:"cafd6f865c0c4b49ab46e621e6338f94.jpg",name:"Men`s Jacket",price:100,discount:250,precentage:40,info:"High quality cotton   Jacket for men",rate:0,colors:['black','red','Burgundy']},

  

]
review:Ireview[]=[{id:1,name:"Alex M.",review:"Great quality clothes and very friendly customer service.",date:"2026/02/11"},
{id:2,name:"Samantha D.",review:"Affordable prices with amazing quality and stylish designs.",date:"2026/02/11"},
{id:3,name:"Micheal B.",review:"Fast shipping and exactly as shown in pictures",date:"2026/02/10"},
{id:4,name:"Anaa R.",review:"Beautiful colors that stay perfect after washing.",date:"2026/02/19"},
{id:5,name:"Jonaes F.",review:"Perfect sizing and very trendy modern styles.",date:"2026/02/1"},
{id:6,name:"Jak B.",review:"Excellent customer support and smooth shopping experience.",date:"2026/02/3"},
{id:7,name:"Handa E.",review:"Comfortable fabrics with impressive design details.",date:"2026/02/4"},
{id:8,name:"Isabella H.",review:"Fantastic offers and highly competitive prices.",date:"2026/02/5"},
{id:9,name:"James K.",review:"Easy ordering process with no complications at all.",date:"2026/01/16"},
{id:10,name:"Sophia L.",review:"Elegant outfits suitable for all occasions.",date:"2026/01/15"},
{id:11,name:"Danial C.",review:"High quality products at very reasonable prices.",date:"2026/01/10"},
{id:12,name:"Emma W.",review:"Definitely buying again, totally satisfied with everything.",date:"2026/01/9"},



]
filteredReviews: Ireview[] = [...this.review];
constructor(private route:ActivatedRoute,private CartService:Carts){}
faq:Ifaq[]=[{id:1,question:"Do your sizes follow international standards?",answar:"Yes, our sizes follow international size standards. Please check the size guide on each product page before placing your order."},
{id:2,question:"How can I choose the right size?",answar:"You can measure your bust, waist, and hips and compare them with our size chart available on the product page."},
{id:3,question:"Can I return or exchange an item?",answar:"Yes, you can return or exchange items within 14 days of receiving your order, as long as they are in their original condition."},
{id:4,question:"How long does shipping take?",answar:"Shipping usually takes between 2–5 business days, depending on your location."},
{id:5,question:"Do you ship to all areas?",answar:"Yes, we provide shipping to all areas within the country."},
{id:6,question:"Is cash on delivery available?",answar:"Yes, we offer cash on delivery as well as online payment options."},
{id:7,question:"What should I do if I receive a defective item?",answar:"Please contact our customer service within 48 hours of receiving your order and provide a photo of the item. We will resolve the issue as soon as possible."},
{id:8,question:"Are the product colors exactly as shown in the pictures?",answar:"We try to display product colors as accurately as possible. However, slight variations may occur due to screen settings."},
{id:9,question:"Do you offer discounts or promotions?",answar:"Yes, we regularly offer discounts and special promotions. Please check our Offers section for the latest deals."},
{id:10,question:"How can I contact customer service?",answar:"You can reach us through the “Contact Us” page, our social media accounts, or the customer service number listed on the website."},
]
addProduct(product2:any){
  this.CartService.addtocart(product2);
  alert("Your Prouct Was add to cart")
}
togalstar(services:Iproduct2,index:number){
  if(index < services.rate){
    services.rate=index
  }else{
    services.rate=index+1;
  }
}
rating(index: number) {
const selectedRate = index + 1;
if (this.rates === selectedRate) {
    this.rates = 0;      
  } else {
    this.rates = selectedRate;   
  }
}
ngOnInit():void {
localStorage.removeItem('review');
  const id = Number(this.route.snapshot.paramMap.get('id'));
  console.log('ID:', id);
this.services =
      this.men.find(s => s.id === id) ||
      this.product.find(s => s.id === id) ||
      this.products.find(s => s.id === id) ||
      this.product2.find(s => s.id === id);
console.log(this.services);
     const saved = localStorage.getItem('review');
  if (saved) {
    const review = JSON.parse(saved);
    this.name = review.name;
    this.comment = review.comment;
    this.rates = review.rate;
    this.today = review.date;
    this.showcomment = true;
    this.showinputs = true;
  }
}
Writecomment(){
 this.showinputs=false
}
 sendcomment() {

  if (!this.name || !this.comment || this.rates === 0) {
    alert(" please enter full information  ⭐");
    return;
  }

  this.showcomment = true;
  this.showinputs = true;

  const review = {
    name: this.name,
    comment: this.comment,
    rate: this.rates,
    date: new Date()
  };

  localStorage.setItem('review', JSON.stringify(review));

}
 delet(){
  this.showcomment=false;
  this.showinputs=true;
   localStorage.removeItem('review'); 
}
Showreviews(){
  this.showreview = !this.showreview
  this.showfaq=false
}
Showfaq(){
  this.showfaq = ! this.showfaq
  this.showreview=false
}
chosesize1(){
  this.size='S'
}
chosesize2(){
  this.size='M'
}
chosesize3(){
  this.size='L'
}
chosesize4(){
  this.size='XL'
}
increase(){
  if(this.count === null){
    this.count=1;
  }else if(this.count <20){
    this.count++;
  }
}
decrease(){
  if(this.count && this.count >1){
    this.count--;
  }else  {
    this.count=null;
  }
}
selectReview() {
  const today = new Date();

  if (this.selectedReview === 'Last Week') {
    const lastWeek = new Date();
    lastWeek.setDate(today.getDate() - 7);

    this.filteredReviews = this.review.filter(r => {
      const reviewDate = new Date(r.date);
      return reviewDate >= lastWeek && reviewDate <= today;
    });

  } else if (this.selectedReview === 'Last Month') {
    const lastMonth = new Date();
    lastMonth.setMonth(today.getMonth() - 1);

    this.filteredReviews = this.review.filter(r => {
      const reviewDate = new Date(r.date);
      return reviewDate >= lastMonth && reviewDate <= today;
    });

  } else {
    this.filteredReviews = [...this.review]; // All Review
  }
}

 
}
