import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';
import CheckOutItem from '../../components/chekout-item/checkout-item.component';


const CheckOut = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    
    return (

            <CheckoutContainer>
                <CheckoutHeader>
                    <HeaderBlock>
                        <span>Product</span>
                    </HeaderBlock>
                    <HeaderBlock>
                        <span>Description</span>
                    </HeaderBlock>
                    <HeaderBlock>
                        <span>Quantity</span>
                    </HeaderBlock>
                    <HeaderBlock>
                        <span>Price</span>
                    </HeaderBlock>
                    <HeaderBlock>
                        <span>Remove</span>
                    </HeaderBlock>
                </CheckoutHeader>

                {cartItems.map((cartItem) => (
                    <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                ))}

        <Total>TOTAL: ${cartTotal}</Total>
            </CheckoutContainer>

    );
};

export default CheckOut;