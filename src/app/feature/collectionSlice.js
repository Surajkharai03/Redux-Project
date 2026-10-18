import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:JSON.parse(localStorage.getItem('collection')) || []  // isse hme hmmra old data mil jyega
}


 const collectionSlice = createSlice({
    name:'collection',

    initialState,

    reducers:{
        addCollection:(state,action)=>{
            const alreadyExists = state.items.find(
                item => item.id === action.payload.id   // item ki id phle se exist krti h ki nhi krti ye check krega ye
            )

            if(!alreadyExists) {                         
                state.items.push(action.payload);         // agr phle se exist nhi krta h toh add kr do
            localStorage.setItem('collection',JSON.stringify(state.items))
         
            
            }
         },

        removeCollection:(state,action)=>{
           state.items = state.items.filter(
            item => item.id !== action.payload
           )
            localStorage.setItem('collection',JSON.stringify(state.items))
           
        },

        clearCollection:(state)=>{
            state.items = []
            localStorage.removeItem('collection')
         }

        }
 })

 export const {
    addCollection,
    removeCollection,
    clearCollection
} = collectionSlice.actions
 
 export default collectionSlice.reducer