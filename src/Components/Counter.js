import  { useState } from 'react';
import { Button } from '@mui/material';
import {Wrapper, ButtonWrapper} from '../ui/Wrapper'




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
            <ButtonWrapper >

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
