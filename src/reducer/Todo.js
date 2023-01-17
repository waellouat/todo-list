import { createSlice } from '@reduxjs/toolkit' ;

const todoSlice = createSlice({
    name : 'todos' ,
    initialState:[{
        id : Math.random() ,
        descreption : "todo 1" ,
        isDone : false ,
    
    },
    {
        id : Math.random() ,
        descreption : "todo 2" ,
        isDone : false ,
    
    },
    {
        id : Math.random() ,
        descreption : "todo 3" ,
        isDone : false ,
    
    },
],
reducers :{
    // add todo
    add : (state,action) =>{
        const newtodo={
            id:  Math.random(),
            descreption : action.payload ,
            isDone : false
        }
        state.push(newtodo)
    
    },
    // delete todo
    
    delet : (state,action)=>{

      return  state.filter ( (e)=> e.id !== action.payload)
    
    },
    // done todo 
    togueltodo : (state,action)=>{
return state.map ((e)=>{
    if(e.id === action.payload){
return {... e, isDone : !e.isDone}
    }
    else{
        return e
    }
    })
    },
    // renomer todo 
    edittodo :(state,action)=>{
const index = state.findIndex((e)=> e.id === action.payload)
state[index].descreption =prompt ('test')
    }
    
    
    
    }
}) 

export const {add,delet,togueltodo,edittodo}= todoSlice.actions ;
export default todoSlice.reducer 