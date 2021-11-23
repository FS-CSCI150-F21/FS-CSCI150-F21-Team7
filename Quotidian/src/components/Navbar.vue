 <template>
  <nav>
    <div class="nav-wrapper indigo accent-3 darken-1">
      <div class="container">
        <router-link to="/" class="brand-logo">Quotidian</router-link>
        <ul class="right">
          <li v-if="isLoggedin"><span class="email black-text"> {{currentUser}}</span></li>
          <li v-if="isLoggedin"><router-link to="/">Dashboard</router-link></li>
          <li v-if="isLoggedin"><router-link to="/calendar">Calendar</router-link></li>
          <li v-if="isLoggedin"><router-link to="/followlist">Follow</router-link></li>
          <li v-if="!isLoggedin">
            <router-link to="/login">Login</router-link>
          </li>
          <li v-if="!isLoggedin">
            <router-link to="/register">Register</router-link>
          </li>
          <li v-if="isLoggedin">
            <button v-on:click="logout" class="btn black">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
import firebase from "firebase";

export default {
  name: "navbar",

  data() {
    return {
      isLoggedin: false,
      currentUser: false,
    };
  },

  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedin = true;
      this.currentUser = firebase.auth().currentUser.email;
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
</style>