import { createStore } from "redux";
const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// initial state
const initialState = {
  employees: [],
};

// actions creator
export const createEmployee = (payload) => ({
  type: "CREATE_EMPLOYEE",
  payload,
});

// reducer
function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    default:
      return state;
  }
}

export const store = createStore(employeeReducer, reduxDevtools);
