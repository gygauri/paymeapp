/***********************************************************************************
 * Description : This component is used to upload profile picture in My Profile Page
 * @author : Gauri Yadav
 ***********************************************************************************/
import React, { useState } from 'react'
import addProfile from '../images/addProfile.png'

export default function AddNew() {
    const [file, setFile] = useState(null)
    const fileHandler = (e) => {
        setFile(e.target.files[0])
    }
    return (
        <div className="addNewContainer">
            {file ?
                <img className="profileImage" src={file ? URL.createObjectURL(file) : null} alt={file ? file.name : null} /> :
                <div className="addProfileContainer"><img src={addProfile} className="addprofileImage" alt="sitelogo" /></div>}
            <div className="uploadImg"><input type="file" onChange={fileHandler} /></div>
        </div>
    )
}