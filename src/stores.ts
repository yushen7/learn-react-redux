import { configureStore } from '@reduxjs/toolkit'
import reducer from './slicers'

export default configureStore({
  reducer,
})
