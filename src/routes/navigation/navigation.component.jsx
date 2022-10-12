import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';
import { NavigationComponent, LogoContainer, NavLinks, NavLink } from './navigation.styles.jsx';
import { Link, Outlet } from 'react-router-dom';
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
            <NavigationComponent>
                <LogoContainer to='/'>
                    <CompanyLogo className='logo'></CompanyLogo>
                </LogoContainer>

                <NavLinks>
                    <NavLink to='/'>HOME</NavLink>
                    <NavLink to='/shop'>SHOP</NavLink>
                    {currentUser ? (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) : (
                        <NavLink to='/authentication'>SIGN IN</NavLink>
                    )}
                    <CartIcon />
                </NavLinks>

                {
                    isCartOpen && <CartDropDown />
                }

            </NavigationComponent>
            <Outlet />
        </>
    )
}

export default Navigation;