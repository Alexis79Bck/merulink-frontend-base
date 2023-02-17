import React from "react";
import { Grid } from "@mui/material"; 
import styled from "@emotion/styled";

export default function Dashboard(props) {
  const DivRoot = styled.div`
    display: flex;
    flex-grow: 1; 
  `;
  
  const element = (
    <DivRoot>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          Este es el Dashboard
        </Grid>
      </Grid>
    </DivRoot>  
  );
  
  return element;
}
