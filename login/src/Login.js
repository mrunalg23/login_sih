import React from 'react';

const Login = (props) =>{
   const {email,setEmail,password,setPassword,handleLogin, handleSignup, hasAccount,setHasAccount, emailError,setEmailError,passwordError, setPasswordError} = props;
    return(
        
        <section className='login'>
            
            <div className='loginContainer'>
            <div className="login__desc">Sign In to VDirect</div>
            <div className='login__box'>
                <label>Email</label>
                <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)}/>
                <p className='errorMsg'>
                    {emailError}</p>
                <label>Password</label>
                <input type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
                <p className='errorMsg'>
                    {passwordError}</p>
                <div className='btnContainer'>
            
                    {hasAccount ? (
                            <>
                            <button onClick={handleLogin}>Sign In</button>
                            <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                            </>
                    ):(
                        <>
                        <button onClick={handleSignup}>Sign Up</button>
                        <p>Have an account?<span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>
                    )}
                </div>
                </div>
            </div>
        </section>
    )
}

export default Login;