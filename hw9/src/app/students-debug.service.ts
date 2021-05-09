import { HttpClient } from "@angular/common/http";
import {Injectable, OnInit} from '@angular/core';
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";

import { Student } from "./student";

@Injectable()
export class StudentsDebugService {

  students: Student[] = [];
  loadedStudents: Student[] | null = null;

  constructor(private http: HttpClient) {
    this.getStudents();
  }

  getStudents(): Observable<string> {
    return this.http.get("assets/students.json", {responseType: "text"})
      .pipe(tap(
        data => {
          this.students = JSON.parse(data, function (key: string, value: string): string | Date | number | Student {
            if (key === "dateOfBirth") {
              return new Date(value);
            }
            if (key === "score") {
              return Number(value);
            }
            return value;
          });
          this.loadedStudents = this.students.slice();
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
