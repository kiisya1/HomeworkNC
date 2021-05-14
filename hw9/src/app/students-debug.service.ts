import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";

import { Store } from "@ngrx/store";
import { selectStudents } from "./store/selectors/students.selectors";
import { AppState } from "./store/state/app.state";
import { Student } from "./student";

@Injectable()
export class StudentsDebugService {

  students: Student[] = [];
  loadedStudents: Student[] | null = null;

  students$ = this.store$.select(selectStudents);

  constructor(private http: HttpClient, private store$: Store<AppState>) {
    if (this.students.length === 0) {
      this.getStudents();
    }
  }

  getStudents(): Observable<Student[]> {
    return this.http.get("assets/students.json", {responseType: "text"})
      .pipe(map(
        data => {
          const students = JSON.parse(data, function (key: string, value: string): string | Date | number | Student {
            if (key === "dateOfBirth") {
              return new Date(value);
            }
            if (key === "score") {
              return Number(value);
            }
            return value;
          });
          this.students = students;
          this.loadedStudents = this.students.slice();
          return students;
        }));
  }

  getById(id: string): Observable<Student> {
    const found = this.students.find((s) => s.id === id);
    return of(found);
  }

  create(student: Student): Observable<Student> {
    const newStudent = {
      ...student,
      id: Date.now().toString()
    };
    return of(newStudent);
  }

  update(student: Student, id: string): Observable<Student> {
    const updatedStudent = {
      ...student,
      id: id,
    };
    return of(updatedStudent);
  }

  delete(id: string): Observable<Student> {
    const studentToDelete = this.students.find((s) => s.id === id);
    return of(studentToDelete);
  }
}
