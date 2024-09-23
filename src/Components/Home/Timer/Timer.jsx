import React, { useEffect, useState } from 'react'
import {Box, Container,Grid} from '@mui/material'
import './TimerStyle.css';
const Timer = () => {
const[days,setDays]=useState(0);
const[hours,setHours]=useState(0);
const[mins,setMinutes]=useState(0);
const[secs,setSeconds]=useState(0);
const dealine="August,10,2024"
const getTime=()=>{
const time=Date.parse(dealine)-Date.now()
setDays(Math.floor(time/(1000*60*60*24)))
setHours(Math.floor(time/(1000*60*60)%24))
setMinutes(Math.floor(time/(1000/60)%60))
setSeconds(Math.floor((time/1000)%60))
}
useEffect(()=>{
const interval=setInterval(()=>getTime(),1000)
return ()=>clearInterval(interval)
},[])
  return (
    <Box className="timer">
    <Container maxWidth="lg" className='timer_con'>
        <Grid container>
        <Grid item lg={6} md={6} sm={6} xs={12}>
            <Box className="timer_box">
            <Box >
            <h1 className='text' component={"div"}>{days<10?"0"+days:days}:</h1>
<span className='st'>Days</span>
            </Box>
            <Box>
            <h1 className='text'>{hours<10?"0"+hours:hours}:</h1>
<span className='st'>Hours</span>
            </Box>
            <Box>
            <h1 className='text'>{mins<10?"0"+mins:mins}:</h1>
            <span className='st'>Min</span> 
            </Box>
            <Box>
            <h1 className='text'>{secs<10?"0"+secs:secs}</h1>
            <span className='st'>Secs</span>
            </Box>
            </Box>

        </Grid>
     
      <Grid item lg={6} md={6} sm={6} xs={12}>
<Box className="timer_img">
<img src="./image/timer.jpg" alt="" />
</Box>
      </Grid>
      
        </Grid>

    </Container>
    </Box>
  )
}

export default Timer