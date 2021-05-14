app.component("review-list", {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template:
    /* html */
    `
  <div class="reviews">
    <h3>Reviews</h3>
    <ul class="uk-list uk-list-divider">
      <li v-for="(review, index) in reviews" :key="index">
        <span>{{ review.name }} gave this {{ review.rating }} stars</span>
        <p>{{ review.review }}</p>
      </li>
    </ul>
  </div>
  `,
});