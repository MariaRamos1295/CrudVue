// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

//pegamos las credenciales de nuestra base de datos
let app;
var config = {
  apiKey: "AIzaSyB1_L3P8Ea-1wpckKnLP4udeiTW2_f6iUw",
    authDomain: "crudpwa-3e7da.firebaseapp.com",
    databaseURL: "https://crudpwa-3e7da.firebaseio.com",
    projectId: "crudpwa-3e7da",
    storageBucket: "crudpwa-3e7da.appspot.com",
    messagingSenderId: "857509361569"
};
//inicializamos nuestra conexion
firebase.initializeApp(config);

window.firebase=firebase;


firebase.auth().onAuthStateChanged((user)=>{
  if(!app){
    app= new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    });
  }
});

