import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const StripeSecretKey = process.env.Stripe_secret_key;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    try {
      // Create a payment intent on the backend
      const { data } = await axios.post('https://api.stripe.com/v1/payment_intents', { amount: 20
                  ,  currency: 'usd'
                  ,        headers: {
                    Authorization: `Bearer ${StripeSecretKey}`,
                  },

       }); // Example: $20

      const clientSecret = data.clientSecret;

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (paymentResult.error) {
        setError(`Payment failed: ${paymentResult.error.message}`);
        setProcessing(false);
      } else {
        if (paymentResult.paymentIntent.status === 'succeeded') {
          setSuccess(true);
          setError(null);
        }
        setProcessing(false);
      }
    } catch (err) {
      setError('Payment failed. Please try again.');
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit" disabled={!stripe || processing}>
        {processing ? 'Processing...' : 'Pay'}
      </button>
      {success && <p>Payment succeeded! Thank you for your purchase.</p>}
    </form>
  );
};

export default CheckoutForm;




/*   4242 4242 4242 4242
05 / 25
474
25744
*/
