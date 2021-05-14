# Radnom User Generator

https://kreativan.github.io/vue-ref/user-generator/    

Fetching random users from: `https://randomuser.me/api/`

```
methods: {
  async getUser() {

    const res = await fetch("https://randomuser.me/api/");
    const { results } = await res.json();
      
    console.log(results);

  }
}
```