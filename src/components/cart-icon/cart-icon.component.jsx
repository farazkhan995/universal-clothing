import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../resources/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';


const CartIcon = ({onClick}) => {
    const { isCartOpen, setIsCartOpen} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;