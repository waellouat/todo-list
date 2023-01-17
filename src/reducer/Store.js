import { configureStore } from '@reduxjs/toolkit'
import todo from './Todo' ;
 const store = configureStore({
  reducer: {
    todos :todo 
  },
})
export default store ;