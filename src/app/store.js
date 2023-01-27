import { configureStore } from '@reduxjs/toolkit'
import menuReducer from '../features/openMenuSlice'

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  }
})