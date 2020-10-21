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
  console.log(amount)

  return (
    <>
      <h2>Pre-ordering for you and someone else?*</h2>
      <p>*Minimum order is 2</p>
      <div style={{margin: '1rem 0'}}>
        <label htmlFor="select-amount">Select Amount:</label>
        <select id="select-amount" value={amount} onChange={e => setAmount(parseFloat(e.target.value))} style={{marginLeft: '0.5rem'}}>
          <option name="2">2</option>
          <option name="3">3</option>
          <option name="4">4</option>
          <option name="5">5</option>
          <option name="6">6</option>
          <option name="7">7</option>
          <option name="8">8</option>
          <option name="9">9</option>
          <option name="10">10</option>
          <option name="10">11</option>
          <option name="10">12</option>
          <option name="10">13</option>
          <option name="10">14</option>
          <option name="10">15</option>
        </select>
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
