import { createSlice } from '@reduxjs/toolkit'

export const openMenuSlice = createSlice({
  name: 'openMenu',
  initialState: {
    value: false
  },
  reducers: {
    open:(state, {payload})=>{
        return !state
    }
  },
})

export const { open } = openMenuSlice.actions

export const selectUser = state => state.value;
export default openMenuSlice.reducer

