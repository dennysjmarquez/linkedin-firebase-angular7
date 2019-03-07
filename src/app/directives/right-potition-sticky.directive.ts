import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

// Para emular la position Sticky
@Directive({
  selector: '[data-sticky-top]'
})
export class RightPotitionStickyDirective {

  private fixedState = false;
  private top: number;
  private marginTop: number;

  constructor(private ele: ElementRef, private renderer: Renderer2) {

    const element = ele.nativeElement;

    this.top = (element.getAttribute('data-sticky-top'));
    this.marginTop = (element.hasAttribute('data-sticky-margin-top')
      ? (element.getAttribute('data-sticky-margin-top'))
      : 0);

    element.removeAttribute('data-sticky-top');
    element.removeAttribute('data-sticky-margin-top');

    this.goSticky()

  }

  private goSticky() {

    // Me cae mal el Edge pero que se le hace
    const currentScroll = document.documentElement.scrollTop || window.document.body.scrollTop;

    // Se agrega la class fixed-right-card al elemento
    currentScroll + this.marginTop  > this.top && this.fixedState || (this.renderer.addClass(this.ele.nativeElement, 'fixed-right-card'), this.fixedState = true);

    // Se quita la class fixed-right-card al elemento
    currentScroll <= this.top && this.fixedState && (this.renderer.removeClass(this.ele.nativeElement, 'fixed-right-card'), this.fixedState = false);

  }

  @HostListener('window:scroll') private handleScroll() { this.goSticky() }

}
