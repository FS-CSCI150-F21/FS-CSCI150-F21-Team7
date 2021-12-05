<template>
  <div id="profile" class="profview">
      
      <div class="pfp" v-for="data in displayUsers" :key="data.id" >
                        <img :src="`https://i.ibb.co/${data.source}`"
                        :id="`${data.name}`"  
                         :style= 
                              "`
                              z-index: ${data.layer};
                              position: absolute; 
                              height: 500px;
                              top: 0em;
                              left: -5%;
                              clip: rect(29px, 400px, 450px, 0);
                              `"
                    >
    </div>

    <div class="info black" v-for="user in users" :key="user.id">
                  <div class="username"><p>User:</p>{{user.name}}</div>
                  <div class="userbio"><p>Bio:</p>{{user.details}}</div>
    </div>
  
    
    <div class="search black">
          <div class="input-field">
                <div class="input-field">
                <i class="material-icons prefix"></i>
                <input type="text" id="usernames" v-model="usernames" />
                <label class="white-text" for="email">Enter username</label>
          </div>
                <button v-on:click="followlist"
                  class="btn btn-small btn-extended grey lighten-4 black-text">Search</button>
                   <div v-for="user in users" v-bind:key="user.id" class="collection-item">
                    <div class="text">{{user.name}}</div>
                     <!-- <div id="options" v-if="seeoptions">-->
                      <button v-on:click="friendrequest" class ="btn btn-small btn-extended grey lighten-4 black-text">Follow</button>
                      <button v-on:click="showProfile(user.name)" class ="btn btn-small btn-extended grey lighten-4 black-text">View Profile</button>
                      
 
                 </div>
             </div>
          </div>
      </div> 
  
</template>

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
      displayUsers: [],
      displayUsername: '',
      displayUserbio: '',
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
    }
  },
  methods:{
    followlist: function(e) {
      db.collection('users').get().then((querySnapshot) =>{
        this.loading = false
        this.users = [];
       //checks through database for each documented ID username.
        querySnapshot.forEach((doc) => {
          //console.log(doc.data().username)
          if(this.usernames.trim() == doc.data().username.trim() ){
              const data = {
                // sets the name to be displayed for a successful search
                      'name': doc.data().username,
                      'details': doc.data().bio,
              }
                        this.users.push(data)
          }
        })
      })
    },
    showProfile: function(friendname){
                db.collection('users').get().then((querySnapshot) =>{
                var currAvatar= [];
                  querySnapshot.forEach((doc) =>{
                     if(friendname == doc.data().username.trim() ){
                         currAvatar = doc.data().inventory  
                         console.log(currAvatar)
                         this.displayUsers = currAvatar
                       /* for(let i = 0; i < currAvatar.length; i++){
                             this.displayUsers[i] = currAvatar[i]
                            } */
                        console.log(this.displayUsers)
                           this.$forceUpdate()

                     }
                  })
                })
               /* db.collection('users').doc(userID).get().then((querySnapshot) =>{
                  //allows to redraw at each function call, keeping it updated.
                    //creates snapshot at usersID
                    var currAvatar= [];
                    currAvatar = querySnapshot.data().inventory
                    for(let i =0; i < currAvatar.length; i++){
                       this.userAvatar[i] = currAvatar[i]
                    } 
                                      this.$forceUpdate()
                })*/
            },
    friendrequest: function(e){
        var userID = auth.currentUser.uid;
        let currFriendsList = [];
        
          db.collection('users').doc(userID).get().then((querySnapshot) =>{
                // sets current list of friends into array
                 currFriendsList = querySnapshot.data().friendslist
                 //adds newly followed friend to list
                 var checkers = false;
                 var arrLength = currFriendsList.length;
                 console.log(arrLength);
                 //checks if user already exists in friends list
                 for(var i =0;i < arrLength; i++){
                   if(this.usernames.trim() == currFriendsList[i].trim()){
                     checkers = true;
                    }
                  }
                 if (checkers == false){
                  currFriendsList.push(this.usernames)
                   db.collection('users').doc(userID).update({
                     //adds the newly followed person to the array of followed in users data
                      friendslist: currFriendsList
                        })
                           alert(`you followed ${this.usernames}` );
                  }
                  else{
                     alert('you already follow this person!');
                  }
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

<style scoped>
 
.profview{
  position: absolute;
  width: 1200px;
  height: 1200px;
}
.search{
  position: absolute;
  width: 600px;
  height: 1200px;
}
 .userinfo{
  position: relative;
  float: left;
  margin: 100px;
  width: 600px;
  left: 600px;
}
.pfp{
 position: relative;
 left: 600px;
 float: left;
}
.info{
  position: relative;
  float: left;
  margin-top: 400px;
  left: 600px;
} 
</style>