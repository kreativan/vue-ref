app.component("offcanvas-cart", {
  props: {
    cart: {
      type: Array,
    },
  },
  template:
    /* html */
    `
    <div id="offcanvas-cart" uk-offcanvas="flip: true">
      <div class="uk-offcanvas-bar">

        <button class="uk-offcanvas-close" type="button" uk-close></button>

        <h3>Shopping Cart</h3>

        <p v-if="cart.length < 1">No items in cart</p>

        <ul class="uk-list uk-list-divider uk-margin-medium-top">
          <li v-for="(item, index) in cart" :key="item.id" class="uk-flex uk-flex-between uk-flex-middle">
            <span>{{ item.title }} {{ item.color }}</span>
            <button @click="removeFromCart(index)" class="uk-icon-button uk-text-danger" uk-icon="trash"></button>
          </li>
        </ul>

        <div>
          <button v-if="cart.length > 0" @click="resetCart" type="button" class="uk-button uk-button-danger">Reset</button>
        </div>

      </div>
    </div>

  `,
  data() {
    return {};
  },
  methods: {
    removeFromCart(index) {
      this.$emit("remove-from-cart", index);
      console.log(index);
    },
    resetCart() {
      this.$emit("reset-cart");
    },
  },
  computed: {},
});