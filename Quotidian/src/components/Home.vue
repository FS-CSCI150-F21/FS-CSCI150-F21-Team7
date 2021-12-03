<template>
  <div id="home">
    <ul class="collection with-header">
      <li class="collection-header"><h4>Tasks</h4></li>
      <li v-for="user in tasks" v-bind:key="user.id" class="collection-item">
        <div class="chip">{{user.name}}</div>
        {{user.details}} {{user.start}} {{user.end}}
         <router-link class="secondary-content" v-bind:to="{ name: 'view-employee', params: { details: user.details }}"><i class="fa fa-eye"></i></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import db from './firebaseInit'
  import firebase from "firebase";
   // var db = firebase.firestore();
  export default {
    name: 'home',
    data () {
      return {
        tasks: [],
        loading: true
      }
    },
     created () {
     //   var db = firebase.firestore();
      var auth = firebase.auth();

      var userID = auth.currentUser.uid;
      db.collection(userID).get().then((querySnapshot) => {
        this.loading = false
        //console.log("data exists")

        querySnapshot.forEach((doc) => {
          const data = {
            'name': doc.data().name,
            'details': doc.data().details,
            'start': doc.data().start,
            'end': doc.data().end,
           }
          this.tasks.push(data)
        })
      })
    }
  }
</script>