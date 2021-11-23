<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="login card-panel indigo darken-2 white-text center">
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
console.log("i am right here")
import firebase from "firebase";
//import db from './firebaseInit';
async ()=>{

  console.log("i am not right here");
await setDoc(doc(firebase,"users","ally"), {

  name: "ally",
  username: "deded",
  email: " dedefde@gfre.com",

});
}
//import { collection, docRef } from './firebaseInit';

async (dispatch)=>{
try {
  console.log(" I aM WORKING");
    const docRef = await addDoc(collection(db, "newusers"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export default {
  name: "register",

  data: function () {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    register: function (e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password) //saves to firebase authentication
        .then(
          (user) => {
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