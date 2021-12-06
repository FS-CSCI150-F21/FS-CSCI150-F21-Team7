<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="col s10 login card-panel indigo darken-2 white-text center">
            <h3>Register</h3>
            <form action="index.html">
              <div class="input-field">
                <i class="material-icons white-text prefix">email</i>
                <input type="email" id="email" v-model="email" />
                <label class="white-text" for="email">Email Address</label>
              </div>
              <div class="input-field">
                <i class="material-icons white-text prefix">lock</i>
                <input type="password" id="password" v-model="password" />
                <label class="white-text" for="password">Password</label>
              </div>
              <div class="input-field">
                <i class="material-icons white-text prefix">email</i>
                <input type="text" id="username" v-model="username" />
                <label class="white-text" for="username">Username</label>
              </div>
               <div class="input-field">
                <i class="material-icons white-text prefix">email</i>
                <input type="text" id="bio" v-model="bio" />
                <label class="white-text" for="bio">Bio</label>
              </div>
              <button
                v-on:click="register"
                class="btn btn-large btn-extended grey lighten-4 black-text"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'
import firebase from "firebase";
var auth = firebase.auth();
export default {
  name: "register",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register: function (e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password) //saves to firebase authentication
        .then(
          (user) => {
              var userID = auth.currentUser.uid
              console.log("hello there");
              var db = firebase.firestore();
              db.collection('users').doc(userID).set({
              email:  this.email,
              admin: false,
              username: this.username,
              //avatar: " ",
                inventory:[
                     {"id": 1, "name": "face", "layer": 10,  "source": "yXmkvJX/face1.png"},
                     {"id": 2, "name": "eye", "layer": 15, "source": "GCs470k/eye4.png"},
                     {"id": 3, "name": "mouth","layer": 20,  "source": "YydVm1m/mouth2.png"},
                     {"id": 4, "name": "nose", "layer": 25, "source": "xG60wWw/nose2.png"},
                     {"id": 5, "name": "brow", "layer": 30, "source": "McjTk9b/brow1.png"},
                     {"id": 6, "name": "hair", "layer": 35, "source": "qJrRKvg/hair4.png"},
                     {"id": 7, "name": "accessory", "layer": 40, "source": "d6C3fhn/acc3.png"}
             ],
              bio: this.bio,
              friendslist: []
              
            });
            alert(`Account created for ${user.email}`);
            this.$router.push("/");
          },
          (err) => {
            alert(err.message);
          }
        );
      e.preventDefault();
    },
  },
};
</script>