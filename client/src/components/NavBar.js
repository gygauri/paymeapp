/*************************************************************************************
 * Description : This is a resuable component that is used to display Header and Footer 
 *               component on the basis of conditional props (type) input provided by 
 *               parent component.
 * @author : Gauri Yadav
 *************************************************************************************/
import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import '../style/navbar.css'
import payment from '../images/payment.png'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
export default function NavBar(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate(); //Creating Navigation Object
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const logoutUser = () => {
        localStorage.clear()
        navigate('/')
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={props.type === 'footer' ? 'footerNav' : ''}>
                <Toolbar>
                    {props.type === 'dashboard' && <img width='60' height='59' src={payment} className="logo" alt="sitelogo" />}
                    {(props.type === 'header' || props.type === 'dashboard') && <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        PayMe
                    </Typography>}
                    <div>
                        {props.type === 'dashboard' && <IconButton
                            size="large"
                            onClick={(e) => handleClick(e)}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>}
                        <Menu
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                        >
                            <MenuItem
                                onClick={() => logoutUser()}
                            >Logout</MenuItem>
                        </Menu>
                    </div>
                    {
                        props.type === 'footer' && <Footer/>
                    }
                </Toolbar>
            </AppBar>
        </Box>)
}