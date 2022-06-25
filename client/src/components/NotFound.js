/***********************************************************************************
 * Description : This component is used to display 404 error in case user tries to
 *               naigate to a URL which is not present in specified Routes list
 * @author : Gauri Yadav
 ***********************************************************************************/
import React from 'react'
import pagenotfound from '../images/404.png'
import { useNavigate } from 'react-router-dom'
import '../style/notfound.css'
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="oops">Oops!</div>
            <div className="pagenotfound">Page Not Found</div>
            <div className="fournotfour">
                <img src={pagenotfound} className="img" alt="sitelogo" />
            </div>
            <div className="goback">
                <Button variant="contained"
                    startIcon={<KeyboardBackspaceIcon />}
                    onClick={() => navigate('/')} >
                    Go Back To Home Page
      </Button>
            </div>
        </div>
    )
}