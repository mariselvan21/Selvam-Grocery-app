import './header.css';
import {useNavigate} from 'react-router-dom';

function Header() {
    var navigateTo=useNavigate();
    return (
        <header className='header'>
            <div className='container'>
                <div className='headerWrapper'>
                    <div className='headerLogo'>
                        <h1 className='logoHeading'>SELVAM MART</h1>
                    </div>
                    <div className='headerSearchBar'>
                        <input className='searchBox' type='text'></input>
                    </div>
                    <div className='headerRightSide'>
                        <div className='loginOrSignup'>
                            <p className='loginSignupName'>Login/Signup</p>
                        </div>
                        <div className='cartIcon' onClick={()=>{
                                // alert('mari')
                                navigateTo('cart')
                        }}>
                           <p className='cartPlace'> &#128722; </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;