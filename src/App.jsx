import React from 'react';
import Grid  from '@mui/material/Grid'; 
import NavBar from './components/header/NavBar';

export default function App() {
  
  return (
    <div>
      <Grid container direction="column" columns={12}>
        <Grid item xs={2} sm={4} md={4}>
          <NavBar />
        </Grid>
      </Grid>
      <Grid container  spacing={{ xs: 2, md: 4 }} columns={12} sx={{ height: '87vh', backgroundColor: '#90caf9' }}> 
        <Grid item xs={2} sm={4} md={4}>
          <h1> Cuerpo Totalmente Vacío </h1>
        </Grid>  
      </Grid>
      <Grid container direction="column" spacing={{ xs: 2, md: 4 }} columns={12}> 
        <Grid item xs={2} sm={4} md={4}>
          <h1> Footer </h1>
        </Grid>  
      </Grid>
    </div>
  )
}


