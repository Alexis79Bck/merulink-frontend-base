import Container from "@mui/material/Container";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function LoginForm(props) {
    
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Card
        sx={{
          width: "480px",
          border: "3px solid #1565c0",
          borderRadius: "15px",
        }}
        raised
      >
        <CardHeader
          avatar={
            <Avatar
              src="../assets/images/logo-merulink-sin-titulo.png"
              variant="rounded"
              aria-label="logo-meru"
              alt="logo-meru"
            />
          }
          title={
            <Typography align="center" variant="h4">
              Iniciar Sesión
            </Typography>
          }
        />

        <CardContent>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "96%",
              },
              textAlign: "center",
              marginLeft: "10px",
              marginRight: "10px",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="username"
              label="Nombre de Usuario"
              type="text"
              autoComplete="current-username"
              variant="outlined"
            />
            <TextField
              required
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
            />
          </Box>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{
            marginLeft: "10px",
            marginRight: "10px",
            justifyContent: "center",
          }}
        >
          <Button variant="contained" disableElevation>
            Iniciar
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
