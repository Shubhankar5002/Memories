import React,{ useEffect, useState } from "react";
import {Container,Grid,Grow} from '@material-ui/core';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import './index.css'
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home/home";

function App(){
        return(
            <Container maxWidth="lg">
               <Navbar/>
               <Home/>
            </Container>
        )
}

export default App;