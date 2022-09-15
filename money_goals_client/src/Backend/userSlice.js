import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      value: {id: "1", email:'', accBalance: 4000000, accSavingBalance: 100000, loggedIn: false},
    },
    reducers: {
      setUser: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value = action.payload
      },
      emptyUser: (state) => {
        state.value = {id:'', email:'', accBalance: 0}
      },
    },
  })

export const { setUser, emptyUser} = userSlice.actions

export default userSlice.reducer