let myData = {
  cart: 0,
  product: "T-Shirt",
  image: "./assets/images/shirt-blue.jpg",
  description:
    "u phasellus quisquam, eiusmod quasi laborum consequuntur magnis quis habitasse excepturi.",
  url: "index.html",
  inStock: true,
  stock: 10,
  isPromo: false,
  details: ["50% cottom", "30% wool", "20% other"],
  variants: [
    { id: 2234, color: "DarkSlateBlue", image: "./assets/images/shirt-blue.jpg" },
    { id: 2235, color: "DeepSkyBlue", image: "./assets/images/shirt-blue-2.jpg" },
  ],
  style: {backgroundColor: 'white', padding: '30px', boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)" }
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
    updateImage(variantImage) {
      this.image = variantImage;
    }
  },
});