<template>
    <div id="profile" class="collection with-header">
    <div class="profview">
  
    </div>
    <div class="search blue">
          <div class="input-field">
                <div class="input-field">
                <i class="material-icons prefix"></i>
                <input type="text" id="username" v-model="username" />
                <label class="white-text" for="email">Enter username</label>
              </div>
                <button
                v-on:click="followlist"
                class="btn btn-large btn-extended grey lighten-4 black-text"
              >
                Search
              </button>
              </div>
    </div>
     <!-- <div class="list">
        <li><button v-on:click="toggleOptions1">MadMaw</button></li>
        <div id="options" v-if="seeoptions1">
        <button>Follow</button>
        <button>Block</button>  
        <button>View Profile</button>
        </div> 
        <li><button v-on:click="toggleOptions2">The Taskman</button></li>
        <div id="options" v-if="seeoptions2">
        <button>Follow</button>
        <button>Block</button>  
        <button>View Profile</button>
        </div> 
        <li><button v-on:click="toggleOptions3">AbsCutie</button></li>
        <div id="options" v-if="seeoptions3">
        <button>Follow</button>
        <button>Block</button>  
        <button>View Profile</button>
        </div> 
      </div>-->
    </div>
</template>

<style>
template{
  background-color: blueviolet
}
</style>

<script>
//lets see if we can implement the search function using login as
// a template, change data to match with what u need
import db from './firebaseInit'
import firebase from "firebase";
var auth = firebase.auth();
var exists = false;

export default {
 
  name: "followlist",
  data: function () {
    return {
      users: [],
      loading: true,
      username: "",
      word: 'This is a friends list',
      content: 'Info of User',
      content2: 'A search bar',
      //seeoptions1: false,
     // seeoptions2: false,
      //seeoptions3: false
    }
  },
  methods:{
    followlist: function(e) {
      db.collection('users').get().then((querySnapshot) =>{
        this.loading = false
        console.log("succes");
        querySnapshot.forEach((doc) => {
          console.log("succes");
          if(this.username == doc.data().username){
            console.log("succes");
          }
        })
      })
    },
   /* toggleOptions1(){
      this.seeoptions1 = !this.seeoptions1
      this.seeoptions2 = false
      this.seeoptions3 = false
    },
    toggleOptions2(){
      this.seeoptions2 = !this.seeoptions2
      this.seeoptions1 = false
      this.seeoptions3 = false
    },
    toggleOptions3(){
      this.seeoptions3 = !this.seeoptions3
      this.seeoptions2 = false
      this.seeoptions1 = false
    },*/
  },
  created () {
   // Boolean userExists = false;
      
      db.collection('users').orderBy('dept').get().then((querySnapshot) => {
        this.loading = false
        querySnapshot.forEach((doc) => {
          const data = {
            'id': doc.id,
            'name': doc.data().name,
            'dept': doc.data().dept,
            //'position': doc.data().position
          }
          this.users.push(data)
        })
      })
    }
}
</script>