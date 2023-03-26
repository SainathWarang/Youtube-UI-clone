import {Link} from "react-router-dom";
import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
const Container=styled.div`
position:sticky;
top:0px;
background-color:${({theme})=> theme.bgLighter};
height:56px;
`
const Wrapper=styled.div`
display:flex;
align-items:center;
height:100%;
padding:0px 20px;
justify-content:flex-end;
position:relative;

`
const Search=styled.div`
position:absolute;
left:0;
right:0;
margin:auto;
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
padding:5px;
border:1px solid #ccc;
border-radius:3px;


`
const Input=styled.input`
border:none;
background-color:transparent;
width:90%;


` 


const Button = styled.button`
padding:5px 15px;
background-color:transparent;
color:#3ea6ff;
border:1px solid #3ea6ff;
border-radius:3px;
font-weight:500;
cursor:pointer;
display:flex;
align-items:center;
gap:5px;
`

const Navbar = () => {
  return (
    <Container>
    <Wrapper>
      <Search>
        <Input />
        <SearchIcon/>
      </Search>
      <Link to="/signin" style={{textDecoration:"none"}}>
      <Button> SIGN IN</Button>

        </Link>
    </Wrapper>
      

    </Container>
  )
}

export default Navbar