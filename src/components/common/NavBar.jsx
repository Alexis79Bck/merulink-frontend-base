import styled from "@emotion/styled";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import React from "react";

export default function NavBar() {
  const DivRoot = styled.div`
    display: flex;
    flex-grow: 1;
  `;

  const element = (
    <DivRoot>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"></IconButton>
        </Toolbar>
      </AppBar>
    </DivRoot>
  );

  return element;
}
