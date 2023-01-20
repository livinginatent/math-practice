import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    points:0,
    lives:3,
    seconds:20,
    isFinished:false,
    isStarted:false

}

export const gameSlice = createSlice({
    name:'game',
    initialState,
    reducers:{
        gainPoints:(state)=>{
            state.points+=100
        },
        gainTime:(state)=>{
            state.seconds+=5
        },
        earnLife:(state)=>{
            state.lives+=1
        },
        start:(state)=>{
            state.isStarted = true
        },
        finish:(state)=>{
            state.isFinished = true
        },
        restart:(state)=>{
            state.points=0
            state.lives=3
            state.seconds=20
            state.isFinished=false
            state.isStarted=false
            
        },
    }
})

export const {gainPoints, gainTime,earnLife,start,finish,restart} = gameSlice.actions

export default gameSlice.reducer