import { Component, HostListener } from '@angular/core';
import { Iblog } from '../../Services/iblog';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
backtotop:boolean=false;
 
BlogItem:Iblog[]=[{title:"The latest fashion trends for 2026",img:"freestocks-_3Q3tsJ01nc-unsplash.jpg",information:"Discover the best designs and colors of the new season"},
{title:"Celebrity style",img:"istockphoto-1428994315-2048x2048.jpg",information:"Follow celebrity looks and get inspired for your own style."},
{title:"Garment care guide",img:"istockphoto-1210762976-2048x2048.jpg",information:"Tips for preserving your clothes and the best ways to care for them"},
 {title:"The best brands for modern fashion and their prices",img:"istockphoto-1338720994-2048x2048.jpg",information:"Comparison between quality and price"},
{title:"A guide to choosing the right fabrics for each season",img:"istockphoto-1349960077-2048x2048.jpg",information:"Warmth and elegance for winter"},
{title:"Summer style tips: How to dress chic in the heat",img:"istockphoto-1125889307-2048x2048.jpg",information:"Discover the best summer looks and how to style them in the heat."},

]
 
@HostListener('window:scroll',[])
onWindowScroll(){
  this.backtotop =window.scrollY >200;
}
scrolltotop(){
  window.scrollTo({top:0,behavior:'smooth'})
  this.backtotop=false;
}
}
