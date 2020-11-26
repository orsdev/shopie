import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { clearAllCartItems } from '../redux/actions/cart.action';
import { setError, clearError } from '../redux/actions/error.action';

const StripeCheckoutBtn = ({ price }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const stripeKey = 'pk_test_51HY4weLdDWfSLJV4ENHlmJnVcSSfqTLVK1SabL9QI96KJu67EhbiWLpK097bjJ6oikVOZyo0g6mq9ttVSPQ04pW500eDAQQmr4';
  const onToken = (token) => {
    axios({
      url: '/payment',
      method: 'post',
      data: {
        amount: price,
        token
      }
    }).then(function (response) {
      if (response.data.success && response.status === 200) {
        dispatch(clearAllCartItems());
        dispatch(clearError());
      }
    }).catch(function (error) {
      dispatch(setError('Payment failed.'));
    })
  }

  return (
    <section className="mt-5">
      <StripeCheckout
        name={user ? user.username : ''}
        description={`Your total price is $${price}`}
        ComponentClass='stripe-pop-up'
        label="Order" // text inside the Stripe button
        panelLabel="Pay" // prepended to the amount in the bottom pay button
        amount={price * 100} // cents
        currency="USD"
        stripeKey={stripeKey}
        email={user ? user.email : ''}
        // Note: Enabling either address option will give the user the ability to
        // fill out both. Addresses are sent as a second parameter in the token callback.
        // Note: enabling both zipCode checks and billing or shipping address will
        // cause zipCheck to be pulled from billing address (set to shipping if none provided).
        zipCode={false}
        alipay={false} // accept Alipay (default false)
        bitcoin // accept Bitcoins (default false)
        allowRememberMe // "Remember Me" option (default true)
        token={onToken} // submit callback
      // opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
      // closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
      // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
      // you are using multiple stripe keys
      // reconfigureOnUpdate={false}
      // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
      // useful if you're using React-Tap-Event-Plugin
      // triggerEvent="onTouchTap"
      />
    </section>
  )
}

export default StripeCheckoutBtn;