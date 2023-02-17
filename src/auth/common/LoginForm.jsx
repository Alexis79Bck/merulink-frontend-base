import Container from "@mui/material/Container";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box  from "@mui/material/Box";



export default function LoginForm(props) {
  return (
    <Container sx={{
        display: "flex", 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: "80vh"}}>
      <Card sx={{ width: "525px" }}>
        <CardHeader 
            avatar={
                <Avatar src='../assets/images/logo-merulink-sin-titulo.png' variant='rounded' aria-label="logo-meru" alt="logo-meru" />
            }            
            title={
                <Typography align="center" variant="h6" gutterBottom>Iniciar Sesión </Typography>
            } 
        />
        
        <CardContent>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { 
                                              m: 1, 
                                              width: '50%' 
                                            },
                    }}
                noValidate
                autoComplete="off"
            >
                
                <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
                </Typography>
            </Box>
        </CardContent>
        
        </Card>
    </Container>
  );
}
