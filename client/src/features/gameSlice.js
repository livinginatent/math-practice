import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    points:0,
    lives:3,
    seconds:20,
    startGame:false,
    isStarted:false,
    isFinished:false

}

export const gameSlice = createSlice({
    name:'game',
    initialState,
    reducers:{
        startGame:(state)=>{
            state.startGame=true
        },
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
            state.lives=3
            state.seconds=20
            state.isStarted=false
            state.isFinished=false
            state.startGame = false
            
        },
    }
})

export const {gainPoints, gainTime,loseTime,earnLife,loseLife,start,isFinished,restart, startGame} = gameSlice.actions

export default gameSlice.reducer