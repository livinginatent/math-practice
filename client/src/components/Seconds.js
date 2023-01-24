import { Typography } from '@mui/material'
import React from 'react'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import TimerIcon from "@mui/icons-material/Timer";
import Timer from '@mui/icons-material/Timer';


function Seconds() {
    const seconds = useSelector((state)=>state.game.seconds)
  

  return (
    <>
    
    <Typography fontSize={36}><TimerIcon/> {seconds}</Typography>
    </>
  )
}

export default Seconds