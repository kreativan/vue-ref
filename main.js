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
      this.cart.push({id:id, title: title, color: color});
    },
    resetCart() {
      this.cart = [];
    }
  },
});