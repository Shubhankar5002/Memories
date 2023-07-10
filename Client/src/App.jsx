import React from "react";
import {Container,AppBar,Typography,Grid,Grow} from '@material-ui/core';
import Memoriesicon from './images/3837407.png';
import Posts from './components/Posts/Posts';
import Form from './components/Posts/Posts';
import useStyles from './styles.jsx'

function App(){
    const classes=useStyles();
        return(
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                    <img className={classes.image} src={Memoriesicon} height='60' alt="Memories"/>
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        )
}

export default App;