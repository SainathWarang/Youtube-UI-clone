import React from 'react'
import logo from '../images/logo.jpeg'
import styled from 'styled-components'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Comments from '../components/Comments'
import Card from '../components/Card'

const Container = styled.div`
display:flex;
gap:24px;
`
const Content = styled.div`
flex:5;
`
const VideoWrapper = styled.div``

const Title = styled.h1`
font-size:18px;
font-weight:400;
margin-top:20px;
margin-bottom:10px;
color:${({theme})=>theme.text}
`

const Details = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`
const Info = styled.span`
color:${({theme})=>theme.textSoft}`

const Buttons = styled.div`
display:flex;
gap:20px;
color:${({theme})=>theme.text}
`
const Button = styled.div`
display:flex;
align-items:center;
gap:5px;`

const Recommendation = styled.div`
flex:2;
`
const Hr= styled.hr`
border:0.5px solid ${({theme})=>theme.soft};`

const Channel = styled.div`
display:flex;
justify-content:space-between;
`
const ChannelInfo = styled.div`
display:flex;
gap:20px;
`

const Image = styled.img`
width:50px;
height:50px;
border-radius:50%;
`

const ChannelDetail=styled.div`
display:flex;
flex-direction:column;
color:${({theme})=>theme.text};
`
const ChannelName=styled.span`
font-weight:500;
`
const ChannelCounter=styled.span`
color:${({theme})=>theme.textSoft};
margin-top:5px;
margin-bottom:20px;
font-size:12px;
`
const Description=styled.p`
font-size:14px;
`
const Subscribe = styled.button`
background-color:#cc1a00;
font-weight:500;
color:white;
border:none;
border-radius:3px;
height:max-content;
padding:10px 20px;
cursor:pointer;
`
const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe 
          width="100%"
          height="720"
          title='Youtube video player'
          src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
          allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture'
          allowFullScreen
           frameborder="0"
           
           >

           </iframe>
        </VideoWrapper>
       
       <Title>Test Video</Title>
       <Details>
        <Info>
        7,986,89 views, march 21 2023 
        </Info>
        <Buttons>
          <Button><ThumbUpIcon />123</Button>
          <Button><ThumbDownIcon />Dislike</Button>
          <Button><ShareIcon />Share</Button>
          <Button><AddTaskIcon />Save</Button>
        </Buttons>
       </Details>
       <Hr/>
       <Channel>
        <ChannelInfo>
         <Image src={logo}/>
         <ChannelDetail>
          <ChannelName>Sainath Tube</ChannelName>
          <ChannelCounter>1M Subscribers</ChannelCounter>
          <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum officia facilis, enim iure impedit, culpa earum est laudantium odit, tenetur voluptate. Illum veritatis ratione ut deleniti, commodi perferendis inventore.</Description>
         </ChannelDetail>
        </ChannelInfo>
         <Subscribe>Subscribe</Subscribe>
       </Channel>
       <Hr/>
        
       <Comments/>
      </Content>
      <Content>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Content>
    </Container>
  )
}

export default Video