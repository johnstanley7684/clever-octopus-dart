export const siteConfig = {
  name: "Georgetown Raiders",
  contact: {
    email: "info@georgetownraiders.com",
    phone: "(905) 877-8488",
    address: "221 Guelph St., Halton Hills, ON L7G 4A8",
    officeHours: {
      monFri: "9:00 AM - 5:00 PM",
      sat: "10:00 AM - 2:00 PM",
      sun: "Closed"
    }
  },
  payment: {
    // Replace with your actual Stripe Public Key or other provider credentials
    stripePublicKey: "pk_test_your_key_here",
    currency: "USD",
    processingFee: 0.00
  }
};