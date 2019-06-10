import {Directive, ElementRef, Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appExpandCollapseBlock]'
})
export class ExpandCollapseBlockDirective {

  private className = 'collapse-block';

  constructor(private ele: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') click() {

    const ele = this.renderer.selectRootElement(this.ele.nativeElement),
      collapseEle =  this.renderer.selectRootElement(this.ele.nativeElement).previousSibling;

    if(collapseEle.classList.contains(this.className)){

      this.renderer.removeClass(collapseEle,this.className);
      this.renderer.removeClass(ele,'mas');
      this.renderer.addClass(ele,'menos');

    }else{

      this.renderer.addClass(collapseEle,this.className);
      this.renderer.removeClass(ele,'menos');
      this.renderer.addClass(ele,'mas');

    }

  }

}
