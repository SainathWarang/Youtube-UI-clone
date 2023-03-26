import React from 'react'
import {Link} from "react-router-dom";
import styled from 'styled-components'
import saitube from '../images/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import HistoryIcon from '@mui/icons-material/History';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Container = styled.div`
flex:1;
background-color:${({theme})=> theme.bgLighter};
color:${({theme})=> theme.text};
height:100vh;
font-size:14px;
position:sticky;
top:0;
overflow-y: auto;
`
const Wrapper = styled.div`
padding:18px 26px;
`
const Logo = styled.div`
display:flex;
align-items:center;
gap:5px;
font-weight:bold;
margin-bottom:27px;
`
const Img = styled.div`
height:25px;
`
const Items = styled.div`
display:flex;
align-items:center;
gap:20px;
cursor:pointer;
padding:5px 0px;
&:hover{
  background-color:${({theme})=>theme.soft};
}
`
const Hr = styled.hr`
margin:15px 0px;
border:solid 0.5px ${({theme})=> theme.soft};
`
const Login = styled.div``
const Button = styled.button`
padding:5px 15px;
background-color:transparent;
color:#3ea6ff;
border:1px solid #3ea6ff;
border-radius:3px;
font-weight:500;
margin-top:10px;
cursor:pointer;
display:flex;
align-items:center;
gap:5px;
`



const Menu = ({setDarkmode,darkmode}) => {
  return (
    <Container>
      <Wrapper>
      <Link to="/" style={{textDecoration:'none',color:"inherit"}}>
        <Logo>
          <Img>
          <img src={saitube} style={{height:'25px'}} alt="logo" />
          </Img>
       SainathTube
       </Logo>
       </Link>
       <Items>
        <HomeIcon/>
        Home
       </Items>
       <Items>
        <ExploreIcon/>
        Explore
       </Items>
       <Items>
        <SubscriptionsIcon/>
        Subscriptions
       </Items>
       <Hr/>
      
       <Items>
        <VideoLibraryIcon/>
        Library
       </Items>
       <Items>
        <HistoryIcon/>
        History
       </Items>
       <Hr/>
        <Login>
        Sign in to like , comment and subscribe
        <Link to="/signin" style={{textDecoration:"none"}}>

        <Button><AccountCircleIcon/> SIGN IN</Button>
        </Link>
       </Login>
       <Hr/>
       <Items>
        <LibraryMusicIcon/>
        Music
       </Items>
       <Items>
        <SportsBaseballIcon/>
        Sports
       </Items>
       <Items>
        <SportsEsportsIcon/>
       Gaming
       </Items>
       <Items>
        <LocalMoviesIcon/>
      Movies
       </Items>
       <Items>
        <NewspaperIcon/>
       News
       </Items>
       <Items>
        <LiveTvIcon/>
       Live
       </Items>
       <Hr/>
       <Items>
        <SettingsIcon/>
        Settings
       </Items>
       <Items>
        <FlagCircleIcon/>
       Report
       </Items>
       <Items>
        <HelpOutlineIcon/>
       Help
       </Items>
       <Items onClick={()=>setDarkmode(!darkmode)}>
        <LightModeIcon/>
       {darkmode ? "Light":"Dark"} Mode
       </Items>
      </Wrapper>
      </Container>
  )
}

export default Menu