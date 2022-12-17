import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data :[]
}
const AnswerDataSlice = createSlice({
    name:'answer',
    initialState,
    reducers:{
        setAnswer : (state,action)=>{
            if(action.payload.chosenAnswer)
            state.data.push(action.payload) 
        },
        removeAnswer : (state,action)=>{
          const index = state.data.findIndex(e=>e.qstnId===action.payload.qstnId)
          state.data[index] = undefined
        }
    }
}) 
export const {setAnswer,removeAnswer} = AnswerDataSlice.actions
export const getAllAnswers = (state)=>state.answer.data
export default AnswerDataSlice.reducer