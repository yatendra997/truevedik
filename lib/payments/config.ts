export type PaymentProvider = 'none' | 'razorpay' | 'stripe'

export function getPaymentSetup() {
  const provider = (process.env.PAYMENT_PROVIDER || 'none') as PaymentProvider
  const supportedProvider = ['none', 'razorpay', 'stripe'].includes(provider) ? provider : 'none'

  const credentialsConfigured = supportedProvider === 'razorpay'
    ? Boolean(process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET)
    : supportedProvider === 'stripe'
      ? Boolean(process.env.STRIPE_SECRET_KEY)
      : false

  return { provider: supportedProvider, credentialsConfigured, checkoutEnabled: false as const }
}
