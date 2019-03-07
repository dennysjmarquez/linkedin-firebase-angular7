import {Directive, ElementRef, Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appExpandCollapseBlock]'
})
export class ExpandCollapseBlockDirective {

  private className = 'collapse-block';

  constructor(private ele: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') click() {

    const ele: ElementRef = this.ele.nativeElement;
    const collapseEle =  this.ele.nativeElement.previousSibling;

    if(collapseEle.classList.contains(this.className)){

      collapseEle.classList.remove(this.className);
      this.renderer.removeClass(ele,'mas');
      this.renderer.addClass(ele,'menos');

    }else{

      collapseEle.classList.add(this.className);
      this.renderer.removeClass(ele,'menos');
      this.renderer.addClass(ele,'mas');

    }

  }

}
