import './login.css';
import {useState} from 'react';
import {useContext} from 'react';
import Appcontext from '../context/context';


function Login(){

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    var login=useContext(Appcontext).loginHandler;
    console.log(login);

    function emailUpdate(e){
        // console.log(e);
        setEmail(e.target.value);
        console.log(email);
    }

    function passwordUpdate(e){
        setPassword(e.target.value);
        console.log(password);
    }

    function updateForm(e){
        e.preventDefault();
        if(email=='mari20041999@gmail.com'&&password=='123'){
            login(true)
        }
        else{
            alert('Invalid User')
        }

    }
    return(
        <form className='login' onSubmit={updateForm}>
            <div className='container'>
                <div className='loginBox'>
                    <h1 className='loginHeading'>LOGIN</h1>
                    <div className='emailContainer'>
                        <label htmlFor='email'>E-mail</label>
                        <input className='email' id='email' type='email' required onChange={emailUpdate}/>
                    </div>
                    <div className='passwordContainer'>
                        <label htmlFor='pwd'>Password</label>
                        <input className='password' id='pwd' type='password' required onChange={passwordUpdate}/>
                    </div>
                    <input className='submitButton' type='submit'></input>
                </div>
            </div>
        </form>
    )
}

export default Login;