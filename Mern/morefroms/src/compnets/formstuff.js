import React, { useState } from  'react';
    
    
const FormStuff = (props) => {
    const [password, setPassword] = useState("");  
    const [passwordError, setPasswordError] = useState("");
    const [fname, setFname] = useState("");
    const [fnameError, setFnameError] = useState("");
    const [lname, setLname] = useState("");
    const [LnameError, setLnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [confpassword, setconfpassword] = useState("");  
    const [confpasswordError, setconfpassworderror] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { fname,lname, email, password };
        console.log("Welcome", newUser);
    };

    const handleFName = (e) => {
        setFname(e.target.value);
        if(e.target.value.length < 1) {
            setFnameError("Last name is required!");
        } else if(e.target.value.length < 2) {
            setFnameError("Last name must be 2 characters or longer!");
        }
    }
    const handleLName = (e) => {
        setLname(e.target.value);
        if(e.target.value.length < 1) {
            setLnameError("Last name is required!");
        } else if(e.target.value.length < 2) {
            setLnameError("Last name must be 2 characters or longer!");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        }
    }
    const handleconfPassword = (e) => {
        setconfpassword(e.target.value);
        if(e.target.value !== password) {
            setconfpassworderror("Passwords must match!");
        } else if(e.target.value.length < 8) {
            setconfpassworderror("Password must be 8 characters or longer!");
        }
    }


    return(
            <form onSubmit={ (e) => e.preventDefault() }>
    <div>
        <label> First Name: </label>
        <input type="text" onChange={ handleFName } />
        {
            fnameError ?
            <p style={{color:'red'}}>{ fnameError }</p> :
            ''
        }
    </div>
    <div>
        <label> last Name: </label>
        <input type="text" onChange={ handleLName } />
        {
            LnameError ?
            <p style={{color:'red'}}>{ LnameError }</p> :
            ''
        }
    </div>
    <div>
        <label> Email: </label>
        <input type="text" onChange={ handleEmail } />
        {
            emailError ?
            <p style={{color:'red'}}>{ emailError }</p> :
            ''
        }
    </div>
    <div>
        <label> Password: </label>
        <input type="text" onChange={ handlePassword } />
        {
            passwordError ?
            <p style={{color:'red'}}>{ passwordError }</p> :
            ''
        }
    </div>
    <div>
        <label> Confirm Password: </label>
        <input type="text" onChange={ handleconfPassword } />
        {
            confpasswordError ?
            <p style={{color:'red'}}>{ confpasswordError }</p> :
            ''
        }
    </div>
    <input type="submit" value="Submit" />
</form>
    );
};
    
export default FormStuff;
