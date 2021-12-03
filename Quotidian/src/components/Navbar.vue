 <template>
  <nav>
    <div class="nav-wrapper">
      <div class="container">
        <router-link to="/" class=" brand-logo white-text"
          >Quotidian</router-link
        >
        <ul class="right">
          <li v-if="isLoggedin">
            <span class="email grey-text text-lighten-2">
              {{ currentUser }}</span
            >
          </li>
          <li v-if="isLoggedin">
            <router-link class="navy darken-2 btn white-text" to="/"
              >Dashboard</router-link
            >
          </li>
          <li v-if="isLoggedin">
            <router-link class="navy darken-2 btn white-text" to="/calendar"
              >Calendar</router-link
            >
          </li>
         <li v-if="isLoggedin">
            <router-link class="navy darken-2 btn white-text" to="/profile"
              >Profile</router-link
            >
          </li>
           <li v-if="isLoggedin">
            <router-link class="navy darken-2 btn white-text" to="/followlist">Friends</router-link>
          </li>
          <li v-if="!isLoggedin">
            <router-link class="navy darken-2 btn white-text" to="/login"
              >Login</router-link
            >
          </li>
          <li v-if="!isLoggedin">
            <button>
              <router-link class="navy darken-2 btn white-text" to="/register"
                >Register</router-link
              >
            </button>
          </li>
          <li v-if="isLoggedin">
            <button v-on:click="logout" class="btn amber">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
import firebase from "firebase";
import db from './firebaseInit'
var auth = firebase.auth()
export default {
  name: "navbar",

  data() {
    return {
      isLoggedin: false,
      currentUser: "",
    };
  },

  created() {
    if (firebase.auth().currentUser) {
      var userID = auth.currentUser.uid
      this.isLoggedin = true;
      db.collection('users').doc(userID).get().then((querySnapshot) =>{
       
          
            this.currentUser = querySnapshot.data().username
          

         
      })
       
    }
  },

  methods: {
    logout: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
        });
    },
  },
};
</script>

<style scoped>
.email {
  padding-right: 10px;
}

.brand-logo {
  border-radius: 25px;
}

.nav-wrapper {
    position: relative;
    height: 120%;
    background-color: #051747;
  
}
</style>