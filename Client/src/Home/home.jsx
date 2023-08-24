import { Form } from "react-router-dom";
import Posts from "../components/Posts/Posts";
import { Container, Grid, Grow } from "@material-ui/core";
import { getPost } from "../actions/posts";
import { useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import useStyles from '../styles.jsx'
import '../index.css';

const Home = () => {
    const [currentId,setcurrentId]=useState(null);
    const classes=useStyles();
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getPost());
    },[currentId,dispatch])
    return (
        <>
             <Grow in>
                    <Container>
                        <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts setcurrentId={setcurrentId} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form currentId={currentId} setcurrentId={setcurrentId}/>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
        </>);
}

export default Home;