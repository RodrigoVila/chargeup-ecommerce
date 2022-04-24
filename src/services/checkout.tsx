import axios from 'axios'
import jwt from 'jsonwebtoken'

import { loadStripe } from '@stripe/stripe-js'

const API_URL = '/api/checkout_session/'

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
const stripePromise = loadStripe(publishableKey)
const createCheckOutSession = async () => {
  setLoading(true)
  const stripe = await stripePromise
  const checkoutSession = await axios.post('/api/checkout_session', {
    item: item,
  })
  const result = await stripe.redirectToCheckout({
    sessionId: checkoutSession.data.id,
  })
  if (result.error) {
    alert(result.error.message)
  }
  setLoading(false)
}
