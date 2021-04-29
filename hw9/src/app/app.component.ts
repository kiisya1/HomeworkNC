import { HttpClient } from "@angular/common/http";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit } from "@angular/core";
import { Student } from "./student";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent implements OnInit, DoCheck {
  students: Student[];
  oldStudents: Student[] | null = null;
  loadedStudents: Student[] | null = null;
  isRedHighlighted: boolean = true;
  searchName: string = "";
  searchSurname: string = "";
  needYellow: boolean;
  studentToDelete: Student | null = null;
  isPopUpShown: boolean = false;
  selectedScore: "all" | number = "all";
  dateFrom: string = "";
  dateTo: string = "";
  editableStudent: Student | null = null;
  isEditWindowShown: boolean = false;
  isPoorVision: boolean = false;


  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {

    this.http.get("assets/students.json", {responseType: "text"}).subscribe(data => this.students = JSON.parse(data, function (key: string, value: string): string | Date | number | Student {
      if (key === "dateOfBirth") {
        return new Date(value);
      }
      return value;
    }));
  }

  ngDoCheck(): void {
    if (this.oldStudents === null && this.students?.length !== 0) {
      this.cdr.detectChanges();
      if (Array.isArray(this.students)) {
        this.oldStudents = [...this.students];
      }
    }
  }

  getAllStudents(): Student[] {
    if (this.students) {
      if (this.loadedStudents === null) {
        this.loadedStudents = this.students.slice();
      }
      return this.students;
    }
  }

  changeHighlight(): void {
    this.isRedHighlighted = !this.isRedHighlighted;
  }

  confirmDelete(student: Student): void {
    this.isPopUpShown = !this.isPopUpShown;
    this.studentToDelete = student;
  }

  delete(): void {
    this.students = this.students.filter(item => item !== this.studentToDelete);
    this.loadedStudents = this.loadedStudents.filter(item => item !== this.studentToDelete);
    this.isPopUpShown = !this.isPopUpShown;
    this.studentToDelete = null;
  }

  cancelDelete(): void {
    this.isPopUpShown = !this.isPopUpShown;
    this.studentToDelete = null;
  }

  sortAsIs(): void {
    this.students = this.loadedStudents.slice();
  }

  filterScore(score: number): boolean {
    return !(this.selectedScore === "all" || this.selectedScore === score);
  }

  filterDate(dateOfBirth: Date): boolean {
    let startDate: Date;
    let endDate: Date;
    if (this.dateFrom !== "" && this.dateTo !== "" ) {
      if (this.dateFrom <= this.dateTo ) {
        startDate = new Date(this.dateFrom);
        endDate = new Date(this.dateTo);
      } else {
        endDate = new Date(this.dateFrom);
        startDate = new Date(this.dateTo);
      }
    } else if (this.dateFrom === "" && this.dateTo === "") {
      startDate = new Date(1900, 0);
      endDate = new Date();
    } else if (this.dateFrom === "" &&  this.dateTo !== "") {
      startDate = new Date(1900, 0);
      endDate = new Date(this.dateTo);
    } else if (this.dateTo === "" && this.dateFrom !== "") {
      endDate = new Date();
      startDate = new Date(this.dateFrom);
    }
    return !(dateOfBirth >= startDate && dateOfBirth <= endDate);
  }

  saveStudent(value: Student): void {
    if (this.editableStudent === null) {
      this.students.splice(this.students.length, 0, value);
      this.loadedStudents.splice(this.loadedStudents.length, 0, value);
    } else {
      const index = this.students.indexOf(this.editableStudent);
      this.students.splice(index, 1, value);
      const indexLoaded = this.loadedStudents.indexOf(this.editableStudent);
      this.loadedStudents.splice(indexLoaded, 1, value);
      this.editableStudent = null;
    }
    this.isEditWindowShown = false;

  }

  editStudent(student: Student | null): void {
    this.editableStudent = student;
    this.isEditWindowShown = true;
  }

  cancelEditStudent(): void {
    this.editableStudent = null;
    this.isEditWindowShown = false;
  }

}
