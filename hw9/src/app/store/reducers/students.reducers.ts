import { GET_STUDENTS_SUCCESS, StudentsActions } from "../actions/students.actions";
import { StudentsState, STUDENTS_INITIAL_STATE } from "../state/students.state";

export const studentsReducer = (state = STUDENTS_INITIAL_STATE, action: StudentsActions): StudentsState => {
  switch (action.type) {
    case GET_STUDENTS_SUCCESS: {
      return {
        ...state,
        students: action.students
      };
    }
    default: {
      return state;
    }
  }
};

