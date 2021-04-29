import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChange } from "@angular/core";

@Directive({
  selector: "[appPoorVision]"
})
export class PoorVisionDirective implements OnChanges {
  @Input("appPoorVision") isPoorVision: boolean;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnChanges(): void {
    if (this.isPoorVision) {
      this.renderer.addClass(
        this.elementRef.nativeElement,
        "poor-vision",
      );
    } else {
      this.renderer.removeClass(
        this.elementRef.nativeElement,
        "poor-vision",
      );
    }
  }

}
