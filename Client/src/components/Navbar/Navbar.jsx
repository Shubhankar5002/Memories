import { AppBar, Avatar, Typography,Button } from "@material-ui/core";
import styless from './style.js';
import Memoriesicon from '../../images/3837407.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <div className={classes.brand}>
                <Typography className={classes.heading} component={Link} to='/' variant="h2" align="center"> Memories</Typography>
                <img className={classes.image} src={Memoriesicon} height='60' alt="Memories" />
                </div>
                <div className={classes.toolbar}>
                    {user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={classes.result.name} src={classes.result.imageurl}>{user.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                            <Button className={classes.logout} variant='contained' color='secondary'>LogOut</Button>
                        </div>
                    ):(
                        <Button variant='contained' color='primary' component={Link} to='/auth'>Sign Up</Button>
                    )}
                </div>
            </AppBar>
        </>

    );
}

export default Navbar;