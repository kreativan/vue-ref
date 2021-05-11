let myData = {
  cart: 0,
  brand: "Vue.js",
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

// Create vue apps
const app = Vue.createApp({
  data() {
    return myData;
  },
  methods: {
    addToCart() {
      this.cart++; // this.cart reffers to cart in data
    },
    emptyCart() {
      this.cart = 0;
    },
    updateVariant(index) {
      this.selectedVariant = index;
      this.variants.forEach(e => {
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
  },
});