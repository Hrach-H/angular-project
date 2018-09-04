import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  constructor() { }

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = 'cyan';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'transparent';
  }
}
