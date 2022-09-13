import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../Backend/userSlice'
export default configureStore({
  reducer: {
    user: userReducer,
  },
})