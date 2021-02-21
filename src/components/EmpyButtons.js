import React from 'react'
import "./EmpyButtons.css";
import CheckIcon from '@material-ui/icons/Check';
import IconButton from "@material-ui/core/IconButton"
import ClearIcon from '@material-ui/icons/Clear';


function EmpyButtons() {
    return (
        <div className='empyButtons'>
            <IconButton> 
            <ClearIcon style={{ fontSize: 40 }} className="empyButtons__clearIcon"/> Decline
            </IconButton>

            
            <IconButton> 
            <CheckIcon style={{ fontSize: 40 }} className="empyButtons__checkIcon"/> Accept
            </IconButton>

        </div>
    )
}

export default EmpyButtons