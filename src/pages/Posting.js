import React from 'react';
import './Account.css';
import {Link} from 'react-router-dom';

function newPosting() {
    return (
        <form>   
            <div className = "Posting">
               
                <h1>Create a New Posting</h1>
                
                <div className = "formGroup">
                    <label htmlFor="job-title">Job Title:</label>
                    <input type="job-title" name="job-title" id="job-title" placeholder = "Position"/>
                </div>

                <div className = "formGroup">
                    <label htmlFor="company">Company:</label>
                    <input type="company" name="company" id="company" placeholder = "Company"/>
                </div>

                <h3>Upload Job/Company Description:</h3>
                <input type='file' style ={{marginTop:10}}/>               
                <input type="submit" value="Submit"/> 
            </div>
        </form> 
        
    )
}

export default Account
