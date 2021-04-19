import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51Ie1JhBHVweerPiKD5ZiauHVxaum4XV1yLjMsUHfkMPf2T7UKNlyHOJ0u0JDpztqmYSfu9R9nRsTA8gydkmksxSr00UdXEF7bv');


const ProcessPayment = ({handlePayment}) => {    

    return (
             <Elements stripe={stripePromise}>
                 <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
                 {/* <SplitCardForm></SplitCardForm> */}
            </Elements>           
    );
};

export default ProcessPayment;