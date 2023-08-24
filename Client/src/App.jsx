import React,{ useEffect, useState } from "react";
import {Container,Grid,Grow} from '@material-ui/core';
import { getPost } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import useStyles from './styles.jsx';
import { useDispatch } from "react-redux";
import './index.css'
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home/home";

function App(){
    const [currentId,setcurrentId]=useState(null);
    const classes=useStyles();
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getPost());
    },[currentId,dispatch])
        return(
            <Container maxWidth="lg">
               <Navbar/>
               <Home/>
            </Container>
        )
}

export default App;