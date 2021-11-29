<template>
    <div id="profile" class="collection with-header">
    <div class="profview">
  
    </div>
    <div class="search blue">
          <div class="input-field">
                <div class="input-field">
                <i class="material-icons prefix"></i>
                <input type="text" id="usernames" v-model="usernames" />
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
      <div class="list right red">
        {{ word }}
        <li v-for="user in users" v-bind:key="user.id" class="collection-item">

        <button v-on:click="followlist">{{user.name}}</button>
        <!--<button v-on:click="seeoptions = !seeoptions">{{user.name}}</button>-->
        <div id="options" v-if="seeoptions">
        <li><button v-on:click="friendrequest" class ="btn btn-large btn-extended grey lighten-4 black-text">Follow</button></li>
        <li><button>Block</button></li>  
        <li><button>View Profile</button></li>
        </div> 
      </li>
      </div>
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
      usernames: "",
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
        //console.log("succes");
       //checks through database for each documented ID username.
        querySnapshot.forEach((doc) => {
        
           var curruser = this.username;
          if(this.usernames.trim() == doc.data().username.trim() ){
            console.log("SUCCESS")
                        console.log(doc.data().username)  
                         var userToAdd;
            const data = {
                        
                      'name': doc.data().username,
                       
            }//console.log(newFriendID)
          }
          else
            console.log("dont know")
          
  

        })
       // console.log(stringName)
      })
    },
   
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