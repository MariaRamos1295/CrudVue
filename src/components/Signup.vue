<!--interfaz de como queda nuestro registro de usuario-->
<template>
    <div class="row">
        <h2>Signup</h2>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">

            <input type="email" v-model="formData.email" class="form-control" placeholder="email"><br>
            <input type="password" v-model="formData.password" class="form-control" placeholder="password"><br>
            <button class="btn btn-success" @click="signUp">SignUp</button>
        </div>

    </div>
</template>

<!--donde agregamos todos los metodos y atributos que utilizaremos para el usuario-->
<script>
export default {
  name: "Signup",
  data() {
    return {
      formData: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    //se crea usuario y contraseña
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.formData.email,
          this.formData.password
        )
        // una vez creado nos dirijira donde se encuentra nuestro crud
        .then(user => {
          this.$router.replace("/hello");
        })

        //si no se crea correctamente el usurio se enviara  un mensaje de error avisando de e ste problema
        .catch(e => {
          alert("oops" + e.message);
        });
    }
  },

  created() {}
};
</script>

<!--aqui acomodamos todo los estilos de nuestro crud -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
