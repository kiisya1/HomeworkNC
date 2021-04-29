import { Directive, EventEmitter, HostListener, Input, Output } from "@angular/core";
import { Student } from "./student";

@Directive({
  selector: "[appSort]"
})
export class SortDirective {
  @Input("appSort") sortingProperty: string;
  @Input() sortingArray: Student[];
  @Input() direction: "ask" | "desk";

  @Output() sortStudents = new EventEmitter<Student[]>();

  private _sortAsk(a: string | number | Date, b: string | number | Date): number {
    if (a > b) {
      return 1;
    }
    if (a === b) {
      return 0;
    }
    return -1;
  }

  private _sortDesk(a: string | number | Date, b: string | number | Date): number {
    if (a < b) {
      return 1;
    }
    if (a === b) {
      return 0;
    }
    return -1;
  }

  private _capitalize(value: string | number): string | number {
    if (Number.isInteger(value)) {
      return value;
    }
    if (this.sortingProperty === "dateOfBirth") {
      return value;
    }
    if (typeof value === "string") {
      return value.slice(0, 1).toUpperCase() + value.slice(1);
    }
  }

  sort(): void {
    const sortedArray: Student[] = (this.direction === "ask") ?
      this.sortingArray?.sort((a, b) => this._sortAsk(this._capitalize(a[this.sortingProperty]), this._capitalize(b[this.sortingProperty]))) :
      this.sortingArray?.sort((a, b) => this._sortDesk(this._capitalize(a[this.sortingProperty]), this._capitalize(b[this.sortingProperty])));
    this.sortStudents.emit(sortedArray);
  }

  @HostListener("click") onClick(): void {
    this.sort();
  }
}
