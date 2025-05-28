class Store {
  constructor(user) {
    this.user = user;
    // this.stripe = new Stripe(user);
    this.paypal = new Paypal();
  }
  purchaseBike(quantity) {
    // this.stripe.makePayment(200 * quantity * 100);
    this.paypal.makePayment(this.user, 200 * quantity);
  }

  purchaseHelmet(quantity) {
    // this.stripe.makePayment(200 * quantity);
    this.paypal.makePayment(this.user, 200 * quantity);
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

const store = new Store("John");
store.purchaseBike(2);
store.purchaseHelmet(2);
