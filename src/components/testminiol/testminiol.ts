import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-testminiol',
  imports: [],
  templateUrl: './testminiol.html',
  styleUrl: './testminiol.css',
})
export class Testminiol {
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
