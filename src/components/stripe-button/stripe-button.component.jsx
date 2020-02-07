import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = 100 * price
    const publishableKey = 'pk_test_Vm1VyspXuL5WeZYuGzehX0Xy009jruoWzm'

    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }
    return (
        <StripeCheckout 
            label= 'Pay now'
            name= 'TRG MEUBLE Ltd'
            billingAddress
            shippingAddress
            //image = '../../assets/trg-logoHD.svg'
            description ={`Your total is ${price}`}
            amount ={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );

}

export default StripeCheckoutButton