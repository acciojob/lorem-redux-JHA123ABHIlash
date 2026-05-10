import   DataSlice  from "./slice/DataSlice";
import {configureStore} from '@reduxjs/toolkit'

export const store=configureStore({
    reducer:{
        apiData:DataSlice
    }
})