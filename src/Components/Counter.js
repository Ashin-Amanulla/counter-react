import React, { useState } from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';


const Wrapper = styled.div`
  display:grid;
  justify-content:center;
  align-items:center;
  width:400px;
  height:200px;
  border:solid 2px lightblue;
  margin-top:10vh;
  border-radius:5px;


  & h1 {
      color:blue;
      text-align:center;
      font-weight:800;
      font-size:5rem;
      font-family:"Roboto"
      
  }

  `
const ButtonWrapper = styled.div`

display:flex;
justify-content:space-between;

& Button {
    margin-right:10px;
}

`





const Counter = () => {

    var [counterValue, setCounterValue] = useState(0); //useState (Hooks) must be inside React function
    
    const IncrementCounter = () => {  
        setCounterValue(  //setCounterValue changes state value
            ++counterValue
        )
    }
    
    const DecrementCounter = () => {
        setCounterValue(
            --counterValue
        )
    }

    return (
        <Wrapper>
            <h1 > {counterValue} </h1>
            <ButtonWrapper
                variant="outlined"
                aria-label="outlined button group"
                width="100px"
            >
                <Button
                    variant="outlined"
                    onClick={IncrementCounter}
                > + </Button>

                <Button
                    variant="outlined"
                    onClick={DecrementCounter}

                > - </Button>
            </ButtonWrapper>
        </Wrapper>
    )
}

export default Counter
