import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'purple');
  }
}
