import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";

import { STUDENT_SERVICE } from "../../student-service-provider";
import { StudentsDebugService } from "../../students-debug.service";
import { StudentsService } from "../../students.service";
import { GET_STUDENTS, GET_STUDENTS_SUCCESS } from "../actions/students.actions";

@Injectable({
  providedIn: "root"
})
export class StudentsEffects {

  loadStudents$ = createEffect(() => this.actions$.pipe(
    ofType(GET_STUDENTS),
    mergeMap(() => this.studentsService.getStudents()
      .pipe(
        map(students => ({ type: GET_STUDENTS_SUCCESS, students: students })),
      )),
    ),
  );

  constructor(
    private http: HttpClient,
    private actions$: Actions,
    @Inject(STUDENT_SERVICE) public studentsService: StudentsService | StudentsDebugService,
    ) {
  }


}
