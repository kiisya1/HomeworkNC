import { StudentsState, STUDENTS_INITIAL_STATE } from "./students.state";

export interface AppState {
  students: StudentsState;
}

export const APP_INITIAL_STATE: AppState = {
  students: STUDENTS_INITIAL_STATE,
};

export function getInitialState(): AppState {
  return APP_INITIAL_STATE;
}
