import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subjects : []
}

const subjectvaluesSlice = createSlice({
    name:"values",
    initialState,
    reducers:{
        addSubject:(state,action) =>{
            if (typeof window !== "undefined"){
            if(null==window.sessionStorage.getItem("subjects")){
                state.values = [action.payload];
                window.sessionStorage.setItem("subjects",JSON.stringify([action.payload]));
            }
            else{
            var subjects =  JSON.parse(window.sessionStorage.getItem("subjects"));
            subjects.push(action.payload);
            state.values = subjects;
            window.sessionStorage.setItem("subjects",JSON.stringify(subjects));
            }
        }
        }
    }
})

export const {addSubject} = subjectvaluesSlice.actions;
export const getAllSubjectValues = ()=>typeof window !== "undefined" &&
    window.sessionStorage.getItem("subjects")?JSON.parse(window.sessionStorage.getItem("subjects")):[]

export default subjectvaluesSlice.reducer;
