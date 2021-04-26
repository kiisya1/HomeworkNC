import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Student } from "./student";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit {
  students: Student[];
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


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    this.http.get("assets/students.json", {responseType: "text"}).subscribe(data => this.students = JSON.parse(data, function (key: string, value: string): string | Date | number | Student {
      if (key === "dateOfBirth") {
        return new Date(value);
      }
      return value;
    }));
  }

  getAllStudents(): Student[] {
    if (this.students) {
      if (this.loadedStudents === null) {
        this.loadedStudents = this.students.slice();
      }
      return this.students;
    }
  }

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

  sortNameAsk(): Student[] {
    return this.students.sort( (a, b) => this._sortAsk(a.name, b.name)) ;
  }

  sortNameDesk(): Student[] {
    return this.students.sort( (a, b) => this._sortDesk(a.name, b.name)) ;
  }

  sortSurnameAsk(): Student[] {
    return this.students.sort( (a, b) => this._sortAsk(a.surname, b.surname)) ;
  }

  sortSurnameDesk(): Student[] {
    return this.students.sort( (a, b) => this._sortDesk(a.surname, b.surname)) ;
  }

  sortMiddleNameAsk(): Student[] {
    return this.students.sort( (a, b) => this._sortAsk(a.middleName, b.middleName)) ;
  }

  sortMiddleNameDesk(): Student[] {
    return this.students.sort( (a, b) => this._sortDesk(a.middleName, b.middleName)) ;
  }

  sortDateAsk(): Student[] {
    return this.students.sort( (a, b) => this._sortAsk(a.dateOfBirth, b.dateOfBirth)) ;
  }

  sortDateDesk(): Student[] {
    return this.students.sort( (a, b) => this._sortDesk(a.dateOfBirth, b.dateOfBirth)) ;
  }

  sortScoreAsk(): Student[] {
    return this.students.sort( (a, b) => this._sortAsk(a.score, b.score)) ;
  }

  sortScoreDesk(): Student[] {
    return this.students.sort( (a, b) => this._sortDesk(a.score, b.score)) ;
  }

  getDate(date: Date): string {
    const time: string[] = [
      "0" + date.getDate(),
      "0" + (date.getMonth() + 1),
      "0" + date.getFullYear(),
    ].map(component => component.slice(-2));
    return time.join(".");
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

  findStudentByName(name: string): boolean {
    if (this.searchName !== "") {
      const lowerName: string = name.toLowerCase();
      const findingName: string = this.searchName.toLowerCase();
      return lowerName.indexOf(findingName) === 0;
    }
    return false;
  }

  findStudentBySurname(surname: string): boolean {
    if (this.searchSurname !== "") {
      const name: string = surname.toLowerCase();
      const findingName: string = this.searchSurname.toLowerCase();
      return name.indexOf(findingName) === 0;
    }
    return false;
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
