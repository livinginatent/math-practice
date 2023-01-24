import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    points:0,
    lives:3,
    seconds:20,
    newGame:false,
    isStarted:false,
    isFinished:false

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
        isFinished:(state)=>{
            state.isFinished = true
            
        },
        restart:(state)=>{
            state.points=0
            state.newGame = false
            state.lives=3
            state.seconds=20
            state.isStarted=false
            
        },
    }
})

export const {gainPoints, gainTime,loseTime,earnLife,loseLife,start,isFinished,restart} = gameSlice.actions

export default gameSlice.reducer