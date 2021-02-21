import React from 'react'
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div className ="Home">
            <h1>Home page</h1>
            <Link to = '/Home/Account'> <input type="submit" value="Account"/> </Link>
        </div>
    )
}

export default Home
