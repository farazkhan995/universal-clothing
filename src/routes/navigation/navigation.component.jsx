import './navigation.styles.scss';
import { Link, Outlet, NavLink } from 'react-router-dom';
import { ReactComponent as CompanyLogo } from '../../resources/crown.svg';
const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <Link className='logo-container' to= '/'>
                    <CompanyLogo className='logo'></CompanyLogo>
                </Link>

                <div className="nav-links-container">
                    <NavLink className= 'nav-link' to='/shop'>Shop</NavLink>
                    <NavLink className= 'nav-link' to='/sign-in'>Sign In</NavLink>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;