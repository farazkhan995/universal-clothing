import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles';
import styled from 'styled-components';


export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
  @media screen and (max-width: 800px) {
    width: 220px;
  }
`

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`

export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`


// .cart-dropdown-container {


//   .empty-message {

//   }

//   .cart-items {

//   }

//   button {
//     margin-top: auto;
//   }
// }
