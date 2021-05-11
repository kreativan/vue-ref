// Create vue apps
const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    updateCart(id, title, color) {
      this.cart.push({ id: id, title: title, color: color });
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    resetCart() {
      this.cart = [];
    },
  },
});