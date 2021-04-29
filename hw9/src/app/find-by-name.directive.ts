import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChange } from "@angular/core";
import { Student } from "./student";

@Directive({
  selector: "[appFindByName]"
})
export class FindByNameDirective implements OnChanges {
  @Input("appFindByName") searchName: string;
  @Input() searchSurname: string;
  @Input() student: Student;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  private _findStudentByName(): boolean {
    if (this.searchName !== "") {
      const lowerName: string = this.student?.name.toLowerCase();
      const findingName: string = this.searchName?.toLowerCase();
      return lowerName?.indexOf(findingName) === 0;
    }
    return false;
  }

  private _findStudentBySurname(): boolean {
    if (this.searchSurname !== "") {
      const name: string = this.student?.surname.toLowerCase();
      const findingName: string = this.searchSurname?.toLowerCase();
      return name?.indexOf(findingName) === 0;
    }
    return false;
  }

  ngOnChanges(changes: {[property: string]: SimpleChange }): void {
    if (this._findStudentByName() || this._findStudentBySurname()) {
      this.renderer.addClass(
        this.elementRef.nativeElement,
        "table__green",
      );
    } else {
      this.renderer.removeClass(
        this.elementRef.nativeElement,
        "table__green",
      );
    }
  }
}
