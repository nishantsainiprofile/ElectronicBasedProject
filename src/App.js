import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Stripe from './Stripe';

// Load your publishable Stripe key
const stripePromise = loadStripe('pk_test_YOUR_PUBLISHABLE_KEY');

function App() {
  return (
     <div>
    <Elements stripe={stripePromise}>
      <div className="App grid-container">
        {/* Main container */}
        <div className="grid-x grid-padding-x align-center">
          <div className="cell medium-8">  
            {/* Header Section */}
            <h1 className="text-center">Complete Payment</h1>
            <p className="text-center">
              Use the form below to complete your payment securely.
            </p>
          </div>
        </div>

        {/* Payment Form Section */}
        <div className="grid-x grid-padding-x align-center">
          <div className="cell medium-6">
            <div className="card">
              <div className="card-divider">
                <h2>Payment Form</h2>
              </div>
              <div className="card-section">
                <Stripe />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Elements>
    <div>
      <p>this is laptop</p>
      
    </div>
    </div>
  );
}

export default App;

