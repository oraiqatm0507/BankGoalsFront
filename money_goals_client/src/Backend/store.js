import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../Backend/userSlice'
import goalsReducer from '../Backend/goalsSlice'
export default configureStore({
  reducer: {
    user: userReducer,
    goals: goalsReducer
  },
})