import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:calc(100vh-56px);
color:${({theme})=>theme.text};
`

const Wrapper=styled.div`
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
background-color:${({theme})=>theme.bgLighter};
border: 1px solid ${({theme})=>theme.soft};
padding:20px 50px;
gap:10px;`

const Title=styled.h1`
font-size:24px;`
const SubTitle=styled.h2`
font-size:20px;
font-weight:300;
`
const Input=styled.input`
border:none;
background-color:transparent;
border-radius:3px;
padding:10px;
width:100%;

`
const Button=styled.button`
border-radius:3px;
padding:10px 20px;
border:none;
cursor:pointer;
font-weight:300;
background-color:${({theme})=>theme.soft};
color:${({theme})=>theme.textSoft};

`
const More=styled.div`
display:flex;
font-size:12px;
color:${({theme})=>theme.textSoft};
margin-top:10px;

`
const Links=styled.div`
margin-left:50px;
`
const Link=styled.span`
margin-left:30px;`

const Signin = () => {
  return (
    <Container>
      
      <Wrapper>
     <Title>

      Signin
     </Title>
     <SubTitle>To Continue with SaiTube</SubTitle>
     <Input placeholder="username"/>
     <Input type="password" placeholder="password"/>
     <Button>Sign In</Button>
     <Title>
      Or
      </Title>
      <Input placeholder="username"/>
     <Input type="email" placeholder="email"/>
     <Input type="password" placeholder="password"/>
     <Button>Sign Up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
        <Link>Help</Link>
        <Link>Privacy</Link>
        <Link>Terms</Link>
        </Links>
      </More>
      </Container>
  )
}

export default Signin