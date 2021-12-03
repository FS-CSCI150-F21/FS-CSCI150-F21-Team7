<template>
    <div class="collection">
        <div>A Picture</div>
        <div v-for="user in users" v-bind:key="user.id" class="collection-item">
        <div class="text">{{ user.currentUser }}</div>
        </div>
        <div v-for="user in users" v-bind:key="user.id" class="collection-item">
        <div class="text">{{ user.bio }}</div>
        </div>
        <div v-for="user in users" v-bind:key="user.id" class="collection-item">
        <div class="text">{{ user.flist }}</div>
        </div>
    </div>
</template>

<script>
//import image from './qPics/Madmaw.png';
import db from './firebaseInit';
import firebase from "firebase";
var auth = firebase.auth();
//console.log(auth.currentUser.uid)
export default{
    name: "users",
    data() {
        return{
            users: [],
            isLoggedin: false,
            currentUser: "",
            //showbox: true,
            editdesp: "",
            //ProfilePic: image,
            adesp: "",
            bio: ""
        }
    },
   /* name: "friends",
    data() {
        return{
            friends: [],
            friendName: "",
        }
    },
*/

    created() {
      //this.isLoggedin = true;
      var userID = auth.currentUser.uid; 
        let currFriendsList = [];

         db.collection('users').doc(userID).get().then((querySnapshot) =>{
               // this.loading = false;
              
               const data = {
                    'currentUser': querySnapshot.data().username,
                    'bio': querySnapshot.data().bio,
                    'flist': querySnapshot.data().friendslist
               }
                this.users.push(data)
        })
       },
    /*friendsList(){
             let currFriendsList = [];
              db.collection('users').doc(userID).get().then((querySnapshot) =>{
               // this.loading = false;
               currFriendsList = querySnapshot.data().friendslist
               //console.log(doc.data().username)
               arrLength = currFriendsList.length;
               
        })
    },*/
      
};
</script>

<style scoped>
.Fullpage{
    background-color: rgb(0, 0, 196);
    border: black 3px solid;
}
.profilename{
    position: relative;
    left: 300px;
    width: 300px;
    height: 50px;
    font-size: 200%;
    margin: 10px;
    /*border: blue 3px solid;*/
    background-color: white;
}
.pfp{
    position: relative;
    left: 400px;
    width: 300px;
    height: 300px;
    /*border: red 3px solid;*/
    background-color: grey;
}
.desp{
    position: relative;
    left: 300px;
    width: 500px;
    height: 300px;
    margin: 10px;
    /*border: green 3px solid;*/
    background-color: rgb(255, 255, 255);
}
.editbox{
    position: relative;
    left: 300px;
    width: 500px;
    height: 300px;
    margin: 10px;
    /*border: green 3px solid;*/
    background-color: rgb(255, 255, 255);
}
.edit button{
    position: relative;
    left: 300px;
    border: black 3px solid;
}
.txt{
    max-height: 100%;
	max-width: 100%;
}
.myPic{
    max-height: 100%;
	max-width: 100%;
}
</style>