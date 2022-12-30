import { configureStore } from "@reduxjs/toolkit";
import subjectReducer from "./subjectSlice";
import subjectValuesReducer from "./subjectValuesSlice"
import messageReducer from "./authDataSlice"
import questionReducer from "./questionDataSlice"
import answerReducer from "./answerDataSlice"
import quizHomeDataReducer from "./quizHomeDataSlice"

export const store = configureStore({
    reducer:{
        rows:subjectReducer,
        subjectValues:subjectValuesReducer,
        message:messageReducer,
        qstn:questionReducer,
        answer:answerReducer,
        quizHome:quizHomeDataReducer
    },
    devTools:process.env.NODE_ENV !== 'production',
    
})
