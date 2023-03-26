import React from 'react'
import logo from '../images/logo.jpeg'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
gap:10px;
margin:30px 0px;`

const Avatar=styled.img`
width:50px;
height:50px;
border-radius:50%;
`

const Details=styled.div`
display:flex;
flex-direction:column;
gap:10px;
color:${({theme})=>theme.text};
`

const Name=styled.span`
font-size:13px;
font-weight:500;`

const Text=styled.span`
font-size:14px;
font-weight:500;`


const Date=styled.span`
font-size:12px;
font-weight:400;
color:${({theme})=>theme.textSoft};
margin-left:5px;`

const Comment = () => {
  return (
    <Container>
      <Avatar src={logo}/>
      <Details>
        <Name>SaiTube
        <Date> 1d ago</Date>
        </Name>
      
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ut.</Text>
      </Details>
      
       
    
    </Container>
  )
}

export default Comment