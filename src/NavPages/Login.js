import React from "react";
import TextField from '@mui/material/TextField';
import { Outlet } from "react-router-dom";

export default function Login()
{
    const login = (
        <div className='box'>
                        <h1>Login</h1>
<br/>
                    <form>
                        Email 
                        <br/>
                        <TextField variant="outlined" label="Email" type="email" />
                        <br />
                        <br />
                        Password 
                        <br />
                        <TextField variant="outlined" label="Password" type="password" />
                        <br />
                        <br />
                        <input type='submit' className="bb" />
                        <br /><br/>
                        <p>If you dont have an account </p>
                        
                    </form>
                </div>
    )
    return(
        <>
        {login} 
        </>
    )
}