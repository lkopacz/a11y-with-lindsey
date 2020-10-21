import React, { useState, useRef } from 'react'
import { loadStripe } from '@stripe/stripe-js'

import './stripe-preorder.css'

const buttonStyles = {
  display: 'block',
  fontSize: '1.25rem',
  textAlign: 'center',
  color: '#640d23',
  padding: '12px 60px',
  borderRadius: '16px',
  border: '2px solid',
  padding: '12px 14px',
  fontWeight: 500,
  background: 'transparent',
  fontFamily: "'PT Sans', sans-serif",
  cursor: 'pointer',
  margin: '1rem 0'
}

const buttonDisabledStyles = {
  opacity: '0.5',
  cursor: 'not-allowed',
}

let stripePromise

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)
  }
  return stripePromise
}

const StripePreorder = () => {
  const [amount, setAmount] = useState(2)
  const [loading, setLoading] = useState(false)
  const price = 9.97

  const redirectToCheckout = async event => {
    event.preventDefault()
    console.log('hey?')
    setLoading(true)
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: [
        { price: process.env.GATSBY_PRICE, quantity: amount },
      ],
      successUrl: `${process.env.GATSBY_URL}thank-you-pre-order/`,
      cancelUrl: `${process.env.GATSBY_URL}pre-order/`,
    })
    if (error) {
      console.warn('Error:', error)
      setLoading(false)
    }
  }

  return (
    <>
      <h2>Pre-ordering for you and someone else?*</h2>
      <p>*Minimum order is 2</p>
      <div style={{margin: '1rem 0'}}>
        <label htmlFor="select-amount">Select Amount:</label>
        <input id="select-amount" type="number" min="2" max="10" value={amount} onChange={e => setAmount(parseFloat(e.target.value))}/>
      </div>
      <div>Gift Total: <span style={{fontWeight: 'bold'}}>${(price * amount).toFixed(2)}</span></div>
      <button
        disabled={loading}
        style={
          loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles
        }
        onClick={redirectToCheckout}
      >
        Pre-order {amount} copies
      </button>
    </>
  )
}

export default StripePreorder
