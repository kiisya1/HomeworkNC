import { createSelector } from "@ngrx/store";

import { AppState } from "../state/app.state";
import { StudentsState } from "../state/students.state";


export const selectStudentsState = (state: AppState) => state.students;

export const selectStudents = createSelector(selectStudentsState, (studentsState: StudentsState) => studentsState.students);
