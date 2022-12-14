import { CartDropDownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

const CartDropDown = () => {

  const navigate = useNavigate();
  const { cartItems, isCartOpen ,setIsCartOpen } = useContext(CartContext);

  const CheckoutButtonHandler = () => {
    navigate("checkout");
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={CheckoutButtonHandler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;