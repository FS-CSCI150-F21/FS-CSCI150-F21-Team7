 <template>
  <nav>
    <div class="nav-wrapper indigo accent-3 darken-1">
      <div class="container">
        <router-link to="/" class="brand-logo">Quotidian</router-link>
        <ul class="right">
          <li><router-link to="/">Dashboard</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/register">Register</router-link></li>
          <li><button v-on:click="logout" class="btn black">Logout</button></li>
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