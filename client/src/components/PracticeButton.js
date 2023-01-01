import React from 'react'
import Button from "@mui/material/Button";

const PracticeButton = (props) => {
  return (
    <>
    
    <div className="btn-practice">
      <Button onClick={props.onClick} variant="outlined">Practice {props.arithName}</Button>
    </div>
    </>
  );
}

export default PracticeButton