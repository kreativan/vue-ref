https://kreativan.github.io/vue-ref/basic/

## Demo Data
```
{
  cart: 0,
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
    },
    {
      id: 2235,
      color: "DeepSkyBlue",
      image: "./assets/images/shirt-blue-2.jpg",
      quantity: 0,
      isPromo: false,
    },
    {
      id: 2235,
      color: "Black",
      image: "./assets/images/shirt-black.jpg",
      quantity: 9,
      isPromo: true,
    },
  ],
  style: {
    backgroundColor: "white",
    padding: "30px",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
  },
};
```

## Attribute Binding

```
<img v-bind:src="image" v-bind:alt="product" />
```

Shorthand
```
<img :src="image" :alt="product" />
```


## Conditional Rendering
```
<p v-if="inventory > 10">In Stock</p>
<p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
<p v-else>Out of Stock</p>
```

`v-show` adds a `display:none`
```
<p v-show="inStock">In Stock</p>
```

## List Rendering
Looping through data arrays
```
<ul>
  <li v-for="detail in details">{{ detail }}</li>
</ul>
```

**Key Attribute**: An essential for list items.     
This gives each DOM element a unique key so that Vue can not lose track of it.
```
<div v-for="variant in variants" :key="variant.id">{{ variant.color }}</div>
```

## Event Handling
```
<button class="button" v-on:click="addToCart">Add to Cart</button>
```

A shorthand for `v-on`
```
<button class="button" @click="addToCart">Add to Cart</button>
```

Mouseover
```
<div v-for="variant in variants" :key="variant.id" @mouseover="updateImage(variant.image)">
  {{ variant.color }}
</div>
```


## Class & Style Binding
```
// Use camelCase in the property name
<div :style="{ backgroundColor: variant.color }></div>

// or use dashes
<div :style="{ 'background-color': variant.color }></div>

// or add style object from the data
<div :style="style"></div>
```


Class binding. Add disabledButton class if inStock is false
```
<button 
  class="button" 
  :class="{ disabledButton: !inStock }" 
  :disabled="!inStock" 
  @click="addToCart">
  Add to Cart
</button>
```

## Computed Properties
```
computed: {
  title() {
    return this.brand + ' ' + this.product
  }
}
```

index.html
```
<div 
  v-for="(variant, index) in variants" 
  :key="variant.id" 
  @mouseover="updateVariant(index)"
  class="color-circle" 
  :style="{ backgroundColor: variant.color }">
</div>
```

main.js
```
methods: {
  updateVariant(index) {
    this.selectedVariant = index
  }
}

computed: {
  title() {
    return this.brand + " " + this.product;
  },
  image() {
    return this.variants[this.selectedVariant].image
  },
  inStock() {
    return this.variants[this.selectedVariant].quantity
  }
}
```

## Components & Props
```
app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: 
    /*html*/ 
    `<div></div>`
  ,
  data() {
  
  },
  methods: {

  },
  computed: {

  }

});
```

Importing component
```
<div id="app">
  <product-display></product-display>
</div>

<script src="./components/ProductDisplay.js"></script>
```

## Communicating Events
```
methods: {
  addToCart() {
    this.$emit('add-to-cart', id)
}
```

html
```
<product-display :premium="premium" @add-to-cart="updateCart"></product-display>
```


## Forms & v-model

```
<form class="review-form" @submit.prevent="onSubmit">
  ...
  <input class="button" type="submit" value="Submit">  
</form>
```

Data and methods
```
data() {
  return {
    name: '',
    review: '',
    rating: null
   }
 },
 methods: {
  onSubmit() {
    let productReview = {
      name: this.name,
      review: this.review,
      rating: this.rating,
    }
    this.$emit('review-submitted', productReview)

    this.name = ''
    this.review = ''
    this.rating = null
  }
}
```

Basic validation
```
methods: {
  onSubmit() {
    if (this.name === '' || this.review === '' || this.rating === null) {
      alert('Review is incomplete. Please fill out every field.')
      return
    }
  ...
  }
}
```