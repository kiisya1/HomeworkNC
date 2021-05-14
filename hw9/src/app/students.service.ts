import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

import { Store } from "@ngrx/store";
import { selectStudents } from "./store/selectors/students.selectors";
import { AppState } from "./store/state/app.state";
import { Student } from "./student";
import {GetStudentsFromServer} from './store/actions/students.actions';

interface StudentFromServer {
  surname: string;
  name: string;
  middleName: string;
  dateOfBirth: string | Date;
  score: number | string;
  id?: string;
}

@Injectable({
  providedIn: "root"
})
export class StudentsService {
  students: Student[] = [];
  loadedStudents: Student[] | null = null;

  students$ = this.store$.select(selectStudents);

  constructor(private http: HttpClient, private store$: Store<AppState>) {
    if (this.students.length === 0) {
      this.getStudents();
    }
  }

  getStudents(): Observable<Student[]> {
    return this.http.get("http://localhost:3000/students", {responseType: "text"})
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

  getDate(d: Date): string {
    const time: string[] = [];
    const year: string = String(d.getFullYear());
    const month: string = "0" + (d.getMonth() + 1);
    const day: string = "0" + d.getDate();
    time.push(year);
    time.push(month.slice(-2));
    time.push(day.slice(-2));

    return time.join("-");
  }

  convertData(data: StudentFromServer): Student {
    if (data) {
      data.dateOfBirth = new Date(data.dateOfBirth);
      return <Student> data;
    }
    }

  getById(id: string): Observable<Student> {
    return this.http.get<Student>(`http://localhost:3000/students/${id}`)
      .pipe(
        map(data  => {
        return this.convertData(data);
      }));
  }

  create(student: Student): Observable<Student> {
    const body = {
      surname: student.surname,
      name: student.name,
      middleName: student.middleName,
      dateOfBirth: this.getDate(student.dateOfBirth),
      score: student.score
    };
    return this.http.post<Student>("http://localhost:3000/students", body)
      .pipe(map(data  => {
        return this.convertData(data);
      }));
  }

  update(student: Student, id: string): Observable<Student> {
    const body = {
      surname: student.surname,
      name: student.name,
      middleName: student.middleName,
      dateOfBirth: this.getDate(student.dateOfBirth),
      score: student.score
    };
    return this.http.put<Student>(`http://localhost:3000/students/${id}`, body)
      .pipe(map(data  => {
        return this.convertData(data);
      }));
  }

  delete(id: string): Observable<Student> {
    return this.http.delete<Student>(`http://localhost:3000/students/${id}`)
      .pipe(map(data  => {
        return this.convertData(data);
      }));
  }

}
