import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Link to="/">Home &nbsp;</Link>
                <Link to="/InSeason">In Season &nbsp;</Link>
                <Link to="/Schedule">Schedule&nbsp;</Link>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;
