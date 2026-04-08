 
import { Component, HostListener  } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
username:string='';
useremail:string='';
phone: number | null = null;
subject:string='';
message:string='';
currentuser:any=null;
islogin:boolean=false;

backtotop:boolean=false;
@HostListener('window:scroll',[])
onWindowScroll(){
  this.backtotop =window.scrollY >200;
}
scrolltotop(){
  window.scrollTo({top:0,behavior:'smooth'})
  this.backtotop=false;
}
ngOnInit():void{
  const user =localStorage.getItem('user');
  if(user){
    this.islogin=true;
    this.currentuser=JSON.parse(user)
  }
}
login(){
  if(this.useremail && this.username && this.phone && this.subject && this.message){
    localStorage.setItem('user',JSON.stringify({
      username:this.username,
      useremail:this.useremail
    }))
    this.currentuser ={usermail :this.useremail}
    this.islogin=true
    alert(`Hello ${this.username} Your Message was sent successfuly`)
    this.useremail='';
    this.username='';
    this.phone=null;
    this.subject='';
    this.message='';
  }
  else{
    alert("Check your information ")
  }
}





}
