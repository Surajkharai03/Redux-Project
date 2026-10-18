import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./feature/searchSlice";
import collectionReducer from "./feature/collectionSlice";
export const store = configureStore({
    reducer:{
        search: searchReducer,   // default export h isi liye kisi bhi naam se bhje skte h 
        collection: collectionReducer
    }
})