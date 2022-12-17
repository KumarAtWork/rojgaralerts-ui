import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:''
}
const quizHomeDataSlice = createSlice({
name:'quizHome',
initialState,
reducers:{
     setQuiz : (state, action) =>{
        state.data= action.payload
     }
}

});

export const {setQuiz} = quizHomeDataSlice.actions
export const getQuiz = (state)=>state.quizHome?state.quizHome.data:undefined
export default quizHomeDataSlice.reducer