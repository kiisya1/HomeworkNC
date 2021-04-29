import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appHoverHighlight]"
})
export class HoverHighlightDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener("mouseenter") onMouseEnter(): void {
    this.renderer.addClass(
      this.elementRef.nativeElement,
      "table__blue",
    );
  }

  @HostListener("mouseleave") onMouseLeave(): void {
    this.renderer.removeClass(
      this.elementRef.nativeElement,
      "table__blue",
    );
  }

}
