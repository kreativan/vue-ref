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
<div v-for="variant in variants" :key="variant.id" @mouseover="updateImage(variant.image)">{{ variant.color }}</div>
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


Class binding.    
add disabledButton class if inStock is false
```
<button 
  class="button" 
  :class="{ disabledButton: !inStock }" 
  :disabled="!inStock" 
  @click="addToCart">
  Add to Cart
</button>
```