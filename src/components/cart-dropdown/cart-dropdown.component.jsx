import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

const CartDropDown = () => {

    const navigate = useNavigate();
    const { cartItems } = useContext(CartContext);
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
            {cartItems.length ? (
                                    cartItems.map((cartItem) => (
                                      <CartItem key={cartItem.id} cartItem={cartItem} />
                                    ))
                                  ) : (
                                    <span className='empty-message'>Your cart is empty</span>
                                  )}
            </div>
            <Button onClick = {()=>navigate("checkout")}>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropDown;