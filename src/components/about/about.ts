import { Component, HostListener } from '@angular/core';
import { Foooter } from '../foter/foooter';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-about',
  imports: [Foooter ,RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
backtotop:boolean=false;
@HostListener('window:scroll',[])
onWindowScroll(){
  this.backtotop =window.scrollY >200;
}
scrolltotop(){
  window.scrollTo({top:0,behavior:'smooth'})
  this.backtotop=false;
}
}
