app.component("review-form", {
  template:
    /* html */
    `
  <form class="review-form uk-form uk-form-stacked" @submit.prevent="onSubmit">
    <h3>Leave a Review</h3>
    <div class="uk-margin">
      <label for="name" class="uk-form-label">Name</label>
      <input id="name" class="uk-input" v-model="name" />
    </div>
    <div class="uk-margin">
      <label for="review" class="uk-form-label">Review</label>
      <textarea id="review" class="uk-textarea" rows="5" v-model="review"></textarea>
    </div>
    <div class="uk-margin">
      <label for="rating" class="uk-form-label">Rating</label>
      <select id="rating" class="uk-select" v-model.number="rating">    
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    </div>
    <div class="uk-margin">
      <input type="submit" value="Submit" class="uk-button uk-button-primary" />
    </div>
  </form>
  `,
  data() {
    return {
      name: "",
      review: "",
      rating: null,
    };
  },
  methods: {
    onSubmit() {

      // form data
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating
      }

      // basic validation
      if(this.name === '' || this.review === '' || this.rating === null) {
        UIkit.notification('Please fill in all the fields', {status: "danger", timeout: 1500});
      } else {
        // send data up to main app
        this.$emit("review-submited", productReview); // event, payload
      }

      // reset data
      this.name= '';
      this.review ='';
      this.rating = '';

    },
  },
});