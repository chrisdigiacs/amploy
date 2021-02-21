import React from 'react';
import './Account.css';
import {Link} from 'react-router-dom';

function employerAccount() {
    return (
        <form>   
            <div className = "Account">
               
                <h1>Your Profile</h1>
                
                <div className = "formGroup">
                    <label htmlFor="first-name">First Name:</label>
                    <input type="first-name" name="first-name" id="first-name" placeholder = "John"/>
                </div>  

                <div className = "formGroup">
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="last-name" name="last-name" id="last-name" placeholder = "Smith"/>
                </div>

                <div className = "formGroup">
                    <label htmlFor="company-name">Company Name:</label>
                    <input type="company-name" name="company-name" id="company-name" placeholder = "Company"/>
                </div>

                <button onClick={<Redirect  to="/Posting" />}>Submit a New Posting</button>
                <input type="submit" value="Save"/>
            </div>
        </form> 
        
    )
}

export default Account