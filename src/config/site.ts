export const siteConfig = {
  name: "Georgetown Raiders",
  contact: {
    email: "info@georgetownraiders.com",
    phone: "(289) 808-0996",
    address: "221 Guelph St., Halton Hills, ON L7G 4A8",
    officeHours: {
      monFri: "24hrs",
      sat: "24hrs",
      sun: "24hrs"
    }
  },
  payment: {
    // Replace with your actual Stripe Public Key or other provider credentials
    stripePublicKey: "pk_test_your_key_here",
    currency: "USD",
    processingFee: 0.00
  }
};