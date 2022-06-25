/***********************************************************************************
 * Description : This component is used to display user data which is fetched from
 *               Node JS API (/userdetails).
 *               It comprised of following feaures :-
 *               a) Controlled Input elements
 *               b) Upload profile Image Component
 *               c) Static Menu
 * @author : Gauri Yadav
 ***********************************************************************************/

import React, { Fragment, useState, useEffect } from 'react'
import NavBar from './NavBar'
import '../style/userprofile.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import {useNavigate, useLocation} from 'react-router-dom';
import AddNew from './AddNew';

export default function UserProfile() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [currentOrg, setCurrentOrg] = useState('')
    const [emailAdd, setEmailAdd] = useState('')
    const [workEx , setWorkEx] = useState(0);
    const [enableNotification , setEnableNotification] = useState(false)
    const [paymentOptions, setPaymentOptions] = useState([])
    const navigate = useNavigate(); //Creating Navigation Object
    const {state} = useLocation();
    const [menuItems , setMenuItems] = useState([{id:1,name :'My Profile',selected:true},{id:2,name : 'Programs'},{id:3,name :'Billing'},{id:4,name :'Orders'}]);
    const [selectedMenuItem, setSelectedMenuItem] = useState('My Profile');

    const updatePayments = (clickedChip) => {
        let tempList = paymentOptions;
        for(let value of tempList){
            if(value.id === clickedChip.id){
                value.selected = !clickedChip.selected;
            }
        }
        let updatedList = Object.assign([],tempList);
        setPaymentOptions(updatedList)
    }

     //This is a hook which checks if auth value i.e. loggedIn is present in the localstorage then, lets user be on this 
     //page, else redirect to login page
     useEffect(() => {
        if(String(localStorage.getItem('loggedIn')) !== 'true'){
            navigate('/')
        }else{
            const { email } = state; 
            setEmailAdd(email)
            getUserData();
        }
    },[])

     //This function is used to get static user details from the node service (/userdetails)
     //and sets the response values in respective form input
    const getUserData = () => {
        fetch('/userdetails').then(res => res.json()).then(res => {
            setFirstName(res.firstName)
            setLastName(res.lastName)
            setCurrentOrg(res.currentOrg)
            setWorkEx(res.workExp)
            setEnableNotification(res.enableNotification)
            setPaymentOptions(res.paymentOptions)
        })
    }

    //This function is used to select/de-select menu items in left panel on User profile page
    const selectMenuItem = (menuItem) => {
        let tempList = menuItems;
        for(let value of tempList){
            if(value.id === menuItem.id){
                setSelectedMenuItem(menuItem.name)
                value.selected = true;
            }else{
                value.selected = false;
            }
        }
        let finalList = Object.assign([],tempList);
        setMenuItems(finalList);
    }

    return (
        <Fragment>
            <NavBar type="dashboard" />
            <div className="profileContainer">
                <div className="menu">
                {menuItems.map(menuItem => {
                    return (
                        <div className={menuItem.selected ? "menuitem selected" : "menuitem"} 
                        key={'menu_'+menuItem.id}
                        onClick={() => selectMenuItem(menuItem)}>
                        <div>{menuItem.name}</div>
                        <div><ChevronRightIcon className="arrow" /></div>
                    </div>
                    )
                })}
                </div>
                {selectedMenuItem === 'My Profile' && <div className="detailGrid">
                    <div className="profilePhoto">
                        <h2 className="myProfile">My Profile</h2>
                        <div className="">
                        < AddNew />
                        </div>
                    </div>
                    <div className="profileDetails">
                        <div className="detailitem">
                            <TextField
                                fullWidth
                                label="First Name"
                                value={firstName || ''}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="detailitem">
                            <TextField
                                fullWidth
                                label="Last Name"
                                value={lastName || ''}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="detailitem">
                            <TextField
                                fullWidth
                                label="Current Organisation"
                                value={currentOrg || ''}
                                onChange={(e) => setCurrentOrg(e.target.value)}
                            />
                        </div>
                        <div className="detailitem">
                            <TextField
                                fullWidth
                                disabled
                                label="Email Address"
                                value={emailAdd || ''}
                                onChange={(e) => setEmailAdd(e.target.value)}
                            />
                        </div>
                        <div className="detailsGrid">
                            <div className="workEx">
                                <FormControl fullWidth>
                                    <InputLabel >Work Experience</InputLabel>
                                    <Select
                                        value={workEx}
                                        onChange={(e) => setWorkEx(e.target.value)}
                                        label="Work Experience"
                                    >
                                        <MenuItem value={0}>None</MenuItem>
                                        <MenuItem value={1}>Fresher</MenuItem>
                                        <MenuItem value={2}>Over 4 Years</MenuItem>
                                        <MenuItem value={3}>Over 7 years</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="workEx">
                                <FormGroup>
                                    <FormControlLabel control={<Switch 
                                    onChange={(e) => setEnableNotification(e.target.checked)}
                                    checked={enableNotification} />} label='Enable Notifications' />
                                </FormGroup>
                            </div>
                        </div>
                        <div className="paymentChannelGrid">
                            <div className="channels">Payment Channels Configured</div>
                            <div>
                            <Stack direction="row" spacing={1} className="wrapChip">
                            {undefined !== paymentOptions && 
                            paymentOptions.map(paymentOption => {
                                return (
                                    <Chip color="primary" label={paymentOption.name} variant={paymentOption.selected ? '' : 'outlined'}
                                    key={'menu_'+paymentOption.id}
                                    onClick={() =>updatePayments(paymentOption)} />
                                )
                            })}
                                </Stack>
                                </div>
                            </div>
                            <div className="update">
                            <Button variant="contained" endIcon={<SaveIcon />}>
                                Update
                                </Button>
                        </div>
                    </div>
                </div>}
                {selectedMenuItem !== 'My Profile' && 
                <div className="detailGrid">
                    <div className="profilePhoto">
                        <h2 className="myProfile">{selectedMenuItem}</h2>
                    </div>
                </div>
                    }
            </div>
            <NavBar type="footer" />
        </Fragment>
    )
}