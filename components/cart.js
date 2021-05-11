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

        <ul class="uk-list uk-list-divider">
          <li v-for="item in cart">
            {{ item.title }} {{ item.color }}
          </li>
        </ul>

      </div>
    </div>

  `,
  data() {},
  methods: {},
  computed: {},
});