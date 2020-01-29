import React from 'react';

import {createStructuredSelector} from 'reselect';
import { selectCartItems } from "../../redux/cart/cart.selectors";
import  CheckoutItem  from "../../components/checkout-item/checkout-item.component";
import { connect } from 'react-redux';
import './checkout.styles.scss'

const CheckoutPage = ({cartItems}) => (
    <div className='checkout-page'>
        <div className= 'checkout-header'> 
            <div className= 'header-block'>
                <span>Product</span>
            </div>
            <div className= 'header-block'>
                <span>Description</span>
            </div>
            <div className= 'header-block'>
                <span>Quantity</span>
            </div>
            <div className= 'header-block'>
                <span>Price</span>
            </div>
            <div className= 'header-block'>
                <span>Remove</span>
            </div>
        </div>
        <div className='checkout-body'>
            {
                cartItems.map(cartItem => (
                <CheckoutItem cartItem={cartItem} >  CheckoutItem </CheckoutItem>  
            ))
            }
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector ({
    cartItems : selectCartItems
  });
  

export default connect(mapStateToProps)(CheckoutPage);