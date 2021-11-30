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
                <button v-on:click="followlist"
                class="btn btn-large btn-extended grey lighten-4 black-text">Search</button>
                 <div v-for="user in users" v-bind:key="user.id" class="collection-item">
                  <div class="text">{{user.name}}</div>
                     <!-- <div id="options" v-if="seeoptions">-->
                      <button v-on:click="friendrequest" class ="btn btn-large btn-extended grey lighten-4 black-text">Follow</button>
                      <button v-on:click="friendrequest" class ="btn btn-large btn-extended grey lighten-4 black-text">View Profile</button>
                 </div>
         </div>
    </div>
      </div>
      
       <!-- <li v-for="user in users" v-bind:key="user.id" class="collection-item">
          <div class="chip">{{user.name}}</div>
          {{user.bio}}
        <button v-on:click="followlist">{{user.name}}</button>
        <!--<button v-on:click="seeoptions = !seeoptions">{{user.name}}</button>
        <div id="options" v-if="seeoptions">
        <li><button v-on:click="friendrequest" class ="btn btn-large btn-extended grey lighten-4 black-text">Follow</button></li>
        <li><button>Block</button></li>  
        <li><button>View Profile</button></li>
        
      </li>
      </div>
     </div>-->
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
      content: 'Info of User',
      content2: 'A search bar',
    }
  },
  name: "friendrequest",
  data: function (){
    return {
      users: [],
      loading: true,
      //usernames: "",
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
                         var userToAddID = doc.data().username;
                         console.log(userToAddID);
                const data = {
                      'name': doc.data().username,
                      'details': doc.data().bio,
              }
                        this.users.push(data)
          }
          else
            console.log("none")

        })
      
      })
    },
    friendrequest: function(e){
        var userID = auth.currentUser.uid;
        let currFriendsList = [];
              db.collection('users').doc(userID).get().then((querySnapshot) =>{
                currFriendsList = querySnapshot.data().friendslist
                  currFriendsList.push(this.usernames)
                   db.collection('users').doc(userID).update({
                      friendslist: currFriendsList
                    })

              })
    },
  },
  created () {
   
      db.collection('users').orderBy('dept').get().then((querySnapshot) => {
        this.loading = false
        querySnapshot.forEach((doc) => {
          const data = {
            'id': doc.id,
            'name': doc.data().name,
            'dept': doc.data().dept,
            
          }
          this.users.push(data)
        })
      })
    }
}
</script>