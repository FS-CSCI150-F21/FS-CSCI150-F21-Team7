 <template>
  <nav>
    <div class="nav-wrapper indigo accent-3 darken-1">
      <div class="container">
        <router-link to="/" class="deep-purple accent-1 brand-logo white-text"
          >Quotidian</router-link
        >
        <ul class="right">
          <li v-if="isLoggedin">
            <span class="email grey-text text-lighten-2">
              {{ currentUser }}</span
            >
          </li>
          <li v-if="isLoggedin">
            <router-link class="amber darken-2 btn white-text" to="/"
              >Dashboard</router-link
            >
          </li>
          <li v-if="isLoggedin">
            <router-link class="amber darken-2 btn white-text" to="/calendar"
              >Calendar</router-link
            >
          </li>
          <li v-if="isLoggedin">
            <router-link class="amber darken-2 btn white-text" to="/profile"
              >Profile</router-link
            >
          </li>
          <li v-if="isLoggedin">
            <router-link class="amber darken-2 btn white-text" to="/friends"
              >Friends</router-link
            >
          </li>
          <li v-if="!isLoggedin">
            <router-link class="amber darken-2 btn white-text" to="/login"
              >Login</router-link
            >
          </li>
          <li v-if="!isLoggedin">
            <button>
              <router-link class="amber darken-2 btn white-text" to="/register"
                >Register</router-link
              >
            </button>
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

.brand-logo {
  border-radius: 25px;
}
</style>