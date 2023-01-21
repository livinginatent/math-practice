import { Typography } from '@mui/material'
import React from 'react'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'


function Seconds() {
    const seconds = useSelector((state)=>state.game.seconds)
    



  return (
    <>
    <Typography>{seconds}</Typography>
    </>
  )
}

export default Seconds