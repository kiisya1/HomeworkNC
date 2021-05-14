import { Student } from "../../student";

export interface StudentsState {
  students: Student[];
  selectedStudent?: Student;
}

export const STUDENTS_INITIAL_STATE: StudentsState = {
  students: null,
};
