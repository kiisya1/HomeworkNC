import { Action } from "@ngrx/store";
import { Student } from "../../student";

export const GET_STUDENTS = "[Students] Get Students";
export const GET_STUDENTS_SUCCESS = "[Students] Get Students Success";

export class GetStudentsFromServer implements Action {
  readonly type = GET_STUDENTS;
}

export class GetStudentsSuccess implements Action {
  readonly type = GET_STUDENTS_SUCCESS;

  constructor(public students: Student[]) {
  }
}

export type StudentsActions = GetStudentsFromServer | GetStudentsSuccess;

