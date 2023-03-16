import { createSlice } from '@reduxjs/toolkit'
/* mock data  */
import { employeeMoock } from '../data/employeeMock'


// employee initial state
const  initialState = {
  employeeList: employeeMoock,
}

 /**
 * creating a slice of the store : allows to define
 * action and reducer for employee
 */
const employeeSlice = createSlice({
  // Slice name
  name: 'add',
  // initial state
  initialState,
  // action and reducer
  reducers: {
    addEmployee: (state, action) => {
      state.employeeList.unshift(action.payload)
    },
  },
})

/* export action and reducer   */
const employeeReducer = employeeSlice.reducer
const {addEmployee} = employeeSlice.actions
export { employeeReducer, addEmployee }

