import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';
import './navigation.styles.scss';
import { Link, Outlet, NavLink } from 'react-router-dom';
import { ReactComponent as CompanyLogo } from '../../resources/crown.svg';
import { UserContext } from '../../contexts/user-context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';

const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);



    return (
        <>
            <div className="navigation">
                <Link className='logo-container' to='/'>
                    <CompanyLogo className='logo'></CompanyLogo>
                </Link>

                <div className="nav-links-container">
                    <NavLink className='nav-link' to='/home'>HOME</NavLink>
                    <NavLink className='nav-link' to='/shop'>SHOP</NavLink>
                    {currentUser ? (<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>) : (
                        <NavLink className='nav-link' to='/authentication'>SIGN IN</NavLink>
                    )}
                    <CartIcon />
                </div>

                {
                    isCartOpen && <CartDropDown />
                }

            </div>
            <Outlet />
        </>
    )
}

export default Navigation;