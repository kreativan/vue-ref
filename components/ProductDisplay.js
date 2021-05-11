app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `<div class="product" :style="style">
      <div class="uk-grid" uk-grid>

            <div class="uk-width-expand@m">
              <div class="product-media uk-position-relative">
                <img v-bind:src="image" v-bind:alt="product" width="580" height="420" />
              </div>
            </div>

            <div class="uk-width-expand@m">
              <div class="product-info">

                <h1 class="uk-h2 uk-margin-small">{{ title }}</h1>
                
                <span v-if="inStock > 0 && inStock < 10" class="uk-label uk-label-success">Almost Sold!</span>
                <span v-else-if="inStock > 0" class="uk-label uk-label-success">In Stock</span>
                <span v-else class="uk-label uk-label-danger">Out of Stock</span>
                <span v-if="inStock > 0 && inStock < 10" class="uk-label uk-label-warning uk-margin-small-left">Only {{ inStock }} left</span>

                <span v-show="isPromo" class="uk-label uk-margin-small-left">Promo</span>

                <p>Shipping: {{ snipping }}</p>

                <ul class="uk-list uk-list-disc uk-list-collapse">
                  <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <div>
                  <h4>Choose color:</h4>
                  <span 
                    v-for="(variant, index) in variants" 
                    :key="variant.id" 
                    @click="updateVariant(index)" 
                    class="color-circle"
                    :class="{ active: variant.isActive }"
                    :class="{ promo: variant.isPromo}"
                    :style="{ backgroundColor: variant.color, cursor: 'pointer' }">
                  </span>
                </div>

                <div class="uk-margin">
                  <button 
                    v-on:click="addToCart"
                    :disabled="!inStock || inStock < 1"
                    :class="{ disabledButton: !inStock || inStock < 1 }"
                    type="button" 
                    class="uk-button uk-button-primary uk-margin-right"
                  >
                    Add to Cart
                  </button>
                  <a :href="url" class="uk-button uk-button-default">Details</a>
                </div>

              </div>
            </div>

      </div>
    </div>`,
  data() {
    return {
      brand: "Kreativan",
      product: "T-Shirt",
      description: "U phasellus quisquam, eiusmod quasi laborum consequuntur.",
      details: ["50% cottom", "30% wool", "20% other"],
      url: "index.html",
      selectedVariant: 0,
      variants: [
        {
          id: 2234,
          color: "DarkSlateBlue",
          image: "./assets/images/shirt-blue.jpg",
          quantity: 50,
          isPromo: false,
          isActive: true,
        },
        {
          id: 2235,
          color: "DeepSkyBlue",
          image: "./assets/images/shirt-blue-2.jpg",
          quantity: 0,
          isPromo: false,
          isActive: false,
        },
        {
          id: 2235,
          color: "Black",
          image: "./assets/images/shirt-black.jpg",
          quantity: 9,
          isPromo: true,
          isActive: false,
        },
      ],
      style: {
        backgroundColor: "white",
        padding: "30px",
        boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
      },
    };
  },
  methods: {
    addToCart() {
      let id = this.variants[this.selectedVariant].id;
      let title = this.product;
      let color = this.variants[this.selectedVariant].color;
      this.$emit("add-to-cart", id, title, color);
    },
    updateVariant(index) {
      this.selectedVariant = index;
      this.variants.forEach((e) => {
        e.isActive = false;
      });
      this.variants[this.selectedVariant].isActive = true;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    isPromo() {
      return this.variants[this.selectedVariant].isPromo;
    },
    snipping() {
      return this.premium ? "Free" : 2.99;
    },
  },
});
