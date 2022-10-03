import './login.css';

function Login(){
    return(
        <form className='login'>
            <div className='container'>
                <div className='loginBox'>
                    <h1 className='loginHeading'>LOGIN</h1>
                    <div className='emailContainer'>
                        <label for='email'>E-mail</label>
                        <input className='email' id='email' type='email' required/>
                    </div>
                    <div className='passwordContainer'>
                        <label for='pwd'>Password</label>
                        <input className='password' id='pwd' type='password' required/>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login;