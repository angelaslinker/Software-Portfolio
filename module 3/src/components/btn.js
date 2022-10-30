import React from 'react'
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50px",
        padding: "0 20px",
        boxSizing: "border-box",
        borderRadius: 0, 
        background: "#B8D1B8" ,
        color: "#fff",
        transform: "none",
        boxShadow: "6px 6px 0 0 #1D341D",
    },

  })(Button);



function CustomBtn(props) {

  function clicked() {
    alert('Item Added To Cart');
  }
  
  return (
    <StyledButton onClick={clicked}>
      Add To Cart
    </StyledButton>
  );
}

export default CustomBtn;