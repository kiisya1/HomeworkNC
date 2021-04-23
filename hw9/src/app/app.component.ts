import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { StudentComponent } from "./student";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit {
  students: StudentComponent[];
  loadedStudents: StudentComponent[] | null = null;
  isRedHighlighted: boolean = true;
  searchName: string = "";
  searchSurname: string = "";
  needYellow: boolean;
  studentToDelete: StudentComponent | null = null;
  isPopUpShown: boolean = false;
  selectedScore: "all" | number = "all";
  dateFrom: string = "";
  dateTo: string = "";


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    this.http.get("assets/students.json", {responseType: "text"}).subscribe(data => this.students = JSON.parse(data, function (key: string, value: string): string | Date | number | StudentComponent {
      if (key === "dateOfBirth") {
        return new Date(value);
      }
      return value;
    }));
  }

  getAllStudents(): StudentComponent[] {
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

  sortNameAsk(): StudentComponent[] {
    return this.students.sort( (a, b) => this._sortAsk(a.name, b.name)) ;
  }

  sortNameDesk(): StudentComponent[] {
    return this.students.sort( (a, b) => this._sortDesk(a.name, b.name)) ;
  }

  sortSurnameAsk(): StudentComponent[] {
    return this.students.sort( (a, b) => this._sortAsk(a.surname, b.surname)) ;
  }

  sortSurnameDesk(): StudentComponent[] {
    return this.students.sort( (a, b) => this._sortDesk(a.surname, b.surname)) ;
  }

  sortMiddleNameAsk(): StudentComponent[] {
    return this.students.sort( (a, b) => this._sortAsk(a.middleName, b.middleName)) ;
  }

  sortMiddleNameDesk(): StudentComponent[] {
    return this.students.sort( (a, b) => this._sortDesk(a.middleName, b.middleName)) ;
  }

  sortDateAsk(): StudentComponent[] {
    return this.students.sort( (a, b) => this._sortAsk(a.dateOfBirth, b.dateOfBirth)) ;
  }

  sortDateDesk(): StudentComponent[] {
    return this.students.sort( (a, b) => this._sortDesk(a.dateOfBirth, b.dateOfBirth)) ;
  }

  sortScoreAsk(): StudentComponent[] {
    return this.students.sort( (a, b) => this._sortAsk(a.score, b.score)) ;
  }

  sortScoreDesk(): StudentComponent[] {
    return this.students.sort( (a, b) => this._sortDesk(a.score, b.score)) ;
  }

  getDate(date: Date): string {
    const time: string[] = [
      "0" + date.getDate(),
      "0" + (date.getMonth() + 1),
      "" + date.getFullYear(),
    ].map(component => component.slice(-2));

    return time.join(".");
  }

  changeHighlight(): void {
    this.isRedHighlighted = !this.isRedHighlighted;
  }

  confirmDelete(student: StudentComponent): void {
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
    if (this.selectedScore === "all") {
      return false;
    }
    if (this.selectedScore === score) {
      return false;
    }
    return true;
  }

  filterDate(dateOfBirth: Date): boolean {
    let startDate: Date;
    let endDate: Date;
    if (this.dateFrom <= this.dateTo) {
      startDate = (this.dateFrom !== "") ? new Date(this.dateFrom) : new Date(0);
      endDate = (this.dateTo !== "") ? new Date(this.dateTo) : new Date();
    } else {
      endDate = (this.dateFrom !== "") ? new Date(this.dateFrom) : new Date(0);
      startDate = (this.dateTo !== "") ? new Date(this.dateTo) : new Date();
    }
    return !(dateOfBirth >= startDate && dateOfBirth <= endDate);
  }

  findStudentByName(name: string): boolean {
    if (this.searchName !== "") {
      const lowerName: string = name.toLowerCase();
      const findingName: string = this.searchName.toLowerCase();
      if (lowerName.indexOf(findingName) === 0) {
        return true;
      }
      return false;
    }
    return false;
  }

  findStudentBySurname(surname: string): boolean {
    if (this.searchSurname !== "") {
      const name: string = surname.toLowerCase();
      const findingName: string = this.searchSurname.toLowerCase();
      if (name.indexOf(findingName) === 0) {
        return true;
      }
      return false;
    }
    return false;
  }
}
