<template>
    <div>
      <h1>LOGIN</h1>
      <form @submit.prevent="login">
        <input v-model="username" placeholder="username" />
        <br />
        <br />
        <input v-model="password" placeholder="password" type="password" />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapMutations } from "vuex";
  export default {
    data: () => {
      return {
        username: "",
        password: "",
      };
    },
  //   methods: {
  //   login() {
  //     fetch("http://localhost:3002/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         username: this.username,
  //         password: this.password,
  //       }),
  //     });
  //   },
  // },
    methods: {
      ...mapMutations(["setUser", "setToken"]),
      async login(e) {
        e.preventDefault();
        const response = await fetch("http://localhost:3002/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });
        const { user, token } = await response.json();
        this.setUser(user);
        this.setToken(token);
        localStorage.setItem('token', token);
        this.$router.push("/homepage");
      },
    },
  };
  </script>