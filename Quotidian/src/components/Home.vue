<template>
  <div id="home">
    <ul class="collection with-header">
      <li class="collection-header"><h4>Testing Users</h4></li>
      <li v-for="user in users" v-bind:key="user.id" class="collection-item">
        <div class="chip">{{user.dept}}</div>
        {{user.employee_id}}: {{user.name}} 
         <router-link class="secondary-content" v-bind:to="{ name: 'view-employee', params: { employee_id: user.employee_id }}"><i class="fa fa-eye"></i></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import db from './firebaseInit'
  import firebase from "firebase";
  export default {
    name: 'home',
    data () {
      return {
        users: [],
        loading: true
      }
    },
    created () {
      db.collection('users').get().then((querySnapshot) => {
        this.loading = false
        querySnapshot.forEach((doc) => {
          const data = {
            'id': doc.id,
            'employee_id': doc.data().employee_id,
            'name': doc.data().name,
            'dept': doc.data().dept,
            'position': doc.data().position
          }
          this.users.push(data)
        })
      })
    }
  }
</script>