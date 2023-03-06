import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input("color") bgcolor = "red"
  constructor(private element: ElementRef) {
    //element.nativeElement.style.backgroundColor = this.bgcolor
  }

  @HostListener("mouseenter") addBackgroundColor(){
    this.element.nativeElement.style.backgroundColor = this.bgcolor
  } 

  @HostListener("mouseleave") removeBackgroundColor(){
    this.element.nativeElement.style.backgroundColor = null
  }

}
