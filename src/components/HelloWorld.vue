<!-- interfaz de nuestro crud -->
<template>
  <div class="hello">
      <div class="container">
        <h3>LIBROS</h3>
        <div class="row">
          <div class=" col-md-6 col-md-offset-3">
            <input placeholder="add libro" @keyup.enter="addLibro" type="text" v-model="libro" class="form-control">  
             <ul>
              <li v-for="(libro,key) in fireData" :key=key >
             <div>
               <h2>{{libro.name}}</h2>
                <button class="btn btn-xs btn-primary" @click='editFormMode.push(key);'>Edit</button> 
                <button class="btn btn-xs btn-danger" @click='deleteLibro(key);'>Delete</button> 
                <br><br>                
                <input v-if='editFormMode.includes(key)' type="text" v-model='editingLibro[key]' @keyup.enter='editLibro(key)' class="form-control">
              </div>  
             </li>
          </ul>
        </div>
      </div>          
    </div>    
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      //establecemos los parametros que necesitamos
      libros: [],
      libro: null,
      fireData: null,
      editingLibro: [],
      editFormMode: []
    };
  },
  methods: {
    //metodo para agregar en nuestra base de datos
    addLibro() {
      this.libros.push(this.libro);
      firebase
        .database()
        .ref("libros")
        .push({
          name: this.libro
        });

      this.libro = null;
    },
//metodo para editar 
    editLibro(key) {
      firebase
        .database()
        .ref("libros/" + key)
        .set({
          name: this.editingLibro[key]
        })
        .then(data => {
          this.editingLibro[key] = null;
          this.editFormMode = [];
        });
    },
//metodo para eliminar
    deleteLibro(key) {
      firebase
        .database()
        .ref("libros/" + key)
        .remove();
    },

    //obtienen datos de la base de datos

    fetchFirebaseData() {
      firebase
        .database()
        .ref("libros")
        .on("value", snapshot => {
          this.fireData = snapshot.val();
        });
    }
  },
//crea la base de dato
  created() {
    this.fetchFirebaseData();
  }
};
</script>

<!-- estilo de nuestro crud-->
<style scoped>
h1,
h2 {
  font-weight: normal;
  font-size: 50px
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
button{
  width: 50px;
  height: 40px;
  font-family: 'Courier New';
}
h3{
  font-family: 'Franklin Gothic Medium';
  font-size: 50px
}
</style>
