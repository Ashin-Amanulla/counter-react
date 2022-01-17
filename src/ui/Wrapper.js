
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

//ButtonWrapper

const ButtonWrapper = styled.div`

display:flex;
justify-content:space-between;

& Button {
    margin-right:10px;
}

`

export { Wrapper, ButtonWrapper };