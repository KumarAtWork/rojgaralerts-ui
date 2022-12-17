import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data:[],
    currentIndex:0,
    currentQstn:''
}
const questionDataSlice = createSlice({
    name:"qstn",
    initialState,
    reducers:{
        setQstns:(state,action)=>{
            state.data = action.payload
            state.currentIndex = 0;
        },
        setCurrentIndex:(state,action)=>{state.currentIndex=action.payload.index},
    }
})

export const {setQstns,setCurrentIndex} = questionDataSlice.actions
export const getQstn = (state)=>state.qstn.data[state.qstn.currentIndex]
export const getCurrentIndex = (state)=>state.qstn.currentIndex
export const getAllQstns = (state)=>state.qstn.data
export default questionDataSlice.reducer