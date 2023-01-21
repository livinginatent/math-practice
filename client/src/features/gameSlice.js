import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    points:0,
    lives:3,
    seconds:25,
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
            state.seconds+=10
        },
        loseTime:(state)=>{
            state.seconds-=1
        },
        earnLife:(state)=>{
            state.lives+=1
        },
        loseLife:(state)=>{
            state.lives-=1
        },
        start:(state)=>{
            state.isStarted = true
            
        },
        finish:(state)=>{
            state.isFinished = false
            
        },
        restart:(state)=>{
            state.points=0
            state.lives=3
            state.seconds=25
            state.isStarted=false
            
        },
    }
})

export const {gainPoints, gainTime,loseTime,earnLife,loseLife,start,finish,restart} = gameSlice.actions

export default gameSlice.reducer