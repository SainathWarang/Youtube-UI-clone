import React from 'react'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Signin from '../src/pages/Signin'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './utils/Theme';
import {
   BrowserRouter,
   Routes,
   Route
 } from "react-router-dom";
import Video from './pages/Video';
import Home from './pages/Home';
const Container = styled.div`
  display:flex;
`

const Main = styled.div`
flex:7;
background-color:${({theme})=> theme.bg};

`;
const Wrapper = styled.div`
padding:50px 22px;
`
const App = () => {
   const [darkmode,setDarkmode] = React.useState(true)
   return(
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
    <Container>
      <BrowserRouter>
        <Menu darkmode={darkmode} setDarkmode={setDarkmode}/>
        <Main>
        <Navbar/>
        <Wrapper>
          <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="signin" element={<Signin/>}/>
            <Route path="video">
            <Route path=":id" element={<Video/>}/>
             </Route>
          </Route>
          </Routes>
        </Wrapper>
        </Main>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
   )
}
        

export default App