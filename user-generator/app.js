const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      gender: 'male',
      email: "example@email.com",
      location: "Serbia",
      picture: "https://randomuser.me/api/portraits/men/11.jpg",
    };
  },
  computed: {
    userData() {
      return this.$data;
    },
    fullName() {
      return this.firstName + " " + this.lastName; 
    },
    buttonClass() {
      return (this.gender == 'male') ? "uk-button-primary" : "uk-button-danger";
    }
  },
  methods: {
    async getUser() {

      const res = await fetch("https://randomuser.me/api/");
      const { results } = await res.json();
      
      console.log(results);

      this.firstName = results[0].name.first,
      this.lastName = results[0].name.last,
      this.gender = results[0].gender,
      this.email = results[0].email
      this.location = results[0].location.country,
      this.picture = results[0].picture.large

    }
  }
});

app.mount("#app");