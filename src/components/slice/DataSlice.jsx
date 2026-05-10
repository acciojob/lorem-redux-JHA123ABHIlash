import {createSlice} from '@reduxjs/toolkit'

const initialState={
    data:[]
}

export const DataSlice=createSlice({
    name:"apiData",
    initialState,
    reducers:{
        handleData:(state,action)=>{
            state.data=(action.payload);
        }
    }
})

export const {handleData} =DataSlice.actions;
export default DataSlice.reducer;