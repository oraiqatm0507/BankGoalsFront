import { createSlice } from '@reduxjs/toolkit'

export const goalsSlice = createSlice({
    name: 'goals',
    initialState: {
      value: [{}],
    },
    reducers: {
      setGoals: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value = action.payload
      },
      emptyGoals: (state) => {
        state.value = [{}]
      },
    },
  })

export const { setGoals, emptyGoals} = goalsSlice.actions

export default goalsSlice.reducer