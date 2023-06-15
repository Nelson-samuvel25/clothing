import React from "react";
import StripeCheckout from 'react-stripe-checkout';

import logo from './favicon.ico';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51NJEIfSFZYPhNSZJRKqzVTfgrVE6WESq7Yfbwjd45pnrGvpbkLUndi8zqdsqqzFIf6IWGebIyHLhIiUKnGDjn1JO00Id1FpEgE'

    const onToken = token=>{
        console.log(token);
        alert('payment successful');
    }

    return(
        <StripeCheckout 
        label="pay now"
        name="CROWN clothing Ltd."
        billingAddress
        shippingAddress
        image={logo}
        description={`your total is ₹${price}`}
        amount={priceForStripe}
        panelLabel="pay now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )

}

export default StripeCheckoutButton;