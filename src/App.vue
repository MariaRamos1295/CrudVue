<template>
  <div id="app">
<body>
  
</body>
    <div class="navbar navbar-dark bg-dark">
      <ul class="nav navbar-nav navbar-dark bg-dark">

        <li>
           <router-link to="/">Crud</router-link>
        </li>
        <li v-if="!authUser">
          <router-link to="/sign-in">LOGIN</router-link>
        </li>

        <li v-if="!authUser">
          <router-link to="/sign-up">SIGNUP</router-link>
        </li>

        <li v-if="authUser">
          <a @click="logout"> LOGOUT</a>
          <a href="#">{{authUser.identifier}}</a>

       </li>
      </ul>


    </div>

    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authUser: null
    };
  },
  watch: {
    $route: "setAuthUser"
  },

  methods: {
    setAuthUser() {
      this.authUser = firebase.auth().currentUser;
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/sign-in");
        })
        .catch(e => {
          alert(e.message);
        });
    }
  },
  created() {
    this.setAuthUser();
    // this.authUser=firebase.auth().currentUser;
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background-image: url(https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  background-repeat:no-repeat
}
</style>
