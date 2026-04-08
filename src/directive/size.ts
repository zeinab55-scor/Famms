import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appsize]'
})
export class size{

  

  constructor(private elementReference: ElementRef) {}

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    this.elementReference.nativeElement.style.backgroundColor = 'black';
    this.elementReference.nativeElement.style.border='none'
    this.elementReference.nativeElement.style.color='#fff'
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementReference.nativeElement.style.backgroundColor = '';
    this.elementReference.nativeElement.style.border='1px solid #000';
    this.elementReference.nativeElement.style.color='#000'

  }

}

