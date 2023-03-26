import React from 'react'
import {Link} from "react-router-dom";
import styled from 'styled-components'
import logo from '../images/logo.jpeg'

const Container = styled.div`
width:${(props)=>props.type !== "sm" && "360px"};
cursor:pointer;
margin-bottom:${(props)=>props.type === "sm" ? "10px" : "45px"};
display:${(props)=>props.type === "sm" && "flex"};
gap:10px;
`
const Image = styled.img`
width:100%;
height:${(props)=>props.type === "sm" ? "100px":"202px"};
background-color:#999;
flex:1;

`
const Details = styled.div`
display:flex;
flex:1;
margin-top:${(props)=>props.type !== "sm" && "16px"};
gap:12px;
`
const ChannelImage = styled.img`
width:36px;
height:36px;
border-radius:50%;
background-color:#999;
display:${(props)=>props.type==="sm" && "none"};
`
const Texts = styled.div`
`
const Title = styled.h1`
font-size:16px;
font-weight:500;
color:${({theme})=>theme.text}
`
const ChannelName = styled.h2`
font-size:14px;
font-weight:500;
color:${({theme})=>theme.textSoft};
margin:10px 0px;
`

const Info = styled.div`
font-size:14px;
color:${({theme})=>theme.textSoft};
`

const Card = ({type}) => {
  return (
    <Link to="video/test" style={{textDecoration:'none'}}>

    <Container type={type}>
      <Image type={type} src="https://i.ytimg.com/vi/hlly_qDgMMQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTO-ojHOwyA5Byh_Or2KQhFQFhHw"/>
      <Details type={type}>
      <ChannelImage type={type} src={logo} />
      <Texts>
      <Title>Test Video</Title>
      <ChannelName>Sainath Tube</ChannelName>
      <Info>111k views, 1d ago</Info>
      </Texts>
      </Details>
    </Container>
    </Link>
  )
}

export default Card