import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useState,useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
const Pay =()=>{
    const[stripeToken,setStripeToken] = useState(null)
    const onToken=(token)=>{
        setStripeToken(token);
    }
    useEffect(()=>{
        const makeRequest = async ()=>{
            try{
                const resp = await axios.post("checkout/payment",
                {
                    tokenId:stripeToken,
                    amount:2000
                }).then(data => {
                    alert(`We are in business, ${data.email}`);
                  })
            }
            catch(err){
                console.log(err)
            }
        }
         makeRequest()
    },[stripeToken])
    return(
        <StripeCheckout name='NetflixClone'
        amount={2000}
        token={onToken}
        currency="USD"
        stripeKey = "pk_test_51L7k6IFiFH4fD97dgsiKzVLxL2yNRA8LIE11phV7wX38kaGafAkw9TM7x5uFjPZswlKertg6iEbAvhJsy4tFcpP400rlNV1Afb"
        >

        <button>payNow</button>
        </StripeCheckout>
    );
}
export default Pay;