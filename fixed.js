class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }
  purchaseBike(quantity) {
    this.paymentProcessor.makePayment(200 * quantity);
  }

  purchaseHelmet(quantity) {
    this.paymentProcessor.makePayment(200 * quantity);
  }
}

class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }
  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100);
  }
}

class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new Paypal();
  }
  pay(amountInDollars) {
    this.paypal.makePayment(this.user, amountInDollars);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(`${this.user} made a payment of ${amountInCents / 100} dollars with stripe.`);
  }
}

class Paypal {
  makePayment(user, amountInDollars) {
    console.log(`${user} made a payment of ${amountInDollars} dollars with paypal.`);
  }
}

const store = new Store(new StripePaymentProcessor("John"));
store.purchaseBike(2);
store.purchaseHelmet(2);

const store2 = new Store(new PaypalPaymentProcessor("John"));
store2.purchaseBike(2);
store2.purchaseHelmet(2);
