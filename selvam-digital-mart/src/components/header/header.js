import './header.css';
import {useNavigate} from 'react-router-dom';
import CartIcon  from '../cartIcon/cartIcon';
import {useContext} from 'react';
import Appcontext from '../context/context';

function Header() {
    var isLoggedin=useContext(Appcontext).isLoggedin;
    var setIsLoggedin=useContext(Appcontext).setIsLoggedin;
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
                            {isLoggedin==true && <a className='logout' onClick={()=>{
                                setIsLoggedin(false);
                            }}>LOG OUT</a>}
                        </div>
                        <div className='headerCartIconHolder' onClick={()=>{
                                // alert('mari')
                                navigateTo('cart')
                        }}>
                            <CartIcon />
                           
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;