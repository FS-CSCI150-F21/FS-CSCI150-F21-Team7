<template>
  <div id="friendsList">
    <div class="search" v-bind:class="{ active: searchActive }">
      <icon name="search"></icon>
      <input
        id="searchBar"
        type="text"
        v-model="searchTerm"
        @focus="searchActive = true"
        @blur="searchActive = false"
      />
    </div>
    <Friend
      v-for="(friend, i) in sortedFriends"
      :key="i"
      v-bind:friend="friend"
    ></Friend>
  </div>
</template>

<script>
import Friend from "./FList";

export default {
  name: "friendsList",
  data() {
    return {
      searchActive: false,
      searchTerm: "",
      friends: [
        {
          name: {
            first: "Channa",
            last: "Chultz",
          },
          online: true,
        },
        {
          name: {
            first: "Kita",
            last: "Michele-Schultz",
          },
          online: false,
        },
        {
          name: {
            first: "Chico",
            last: "Dog",
          },
          online: true,
        },
        {
          name: {
            first: "Datt",
            last: "Mark",
          },
          online: true,
        },
      ],
    };
  },
  computed: {
    sortedFriends: function () {
      let sorted = [];
      if (this.searchTerm.length > 0) {
        this.friends.forEach((friend) => {
          const name =
            friend.name.first.toLowerCase() +
            " " +
            friend.name.last.toLowerCase();
          if (name.indexOf(this.searchTerm.toLowerCase()) > -1) {
            sorted.push(friend);
          }
        });
      } else {
        return this.friends;
      }
      return sorted;
    },
  },
  components: {
    Friend: Friend,
  },
};
</script>

<style scoped>
.search {
  display: flex;
  align-items: center;

  padding: 0.25rem 1rem;
  margin-bottom: 15px;

  background: rgba(#7c0808, 0.2);
  color: rgb(65, 62, 62);

  border: none;
  border-radius: 999px;

  transition: 0.3s all;
}

.search .active {
  background: rgba(#630909, 0.9);
  outline: none;
  color: #444;
}

input[type="text"] {
  flex-grow: 1;
  padding-left: 0.5rem;

  color: inherit;

  font-family: inherit;
  font-size: 1.25rem;

  background: transparent;
  border: none;

 /* &:focus,
  &:active {
    outline: none;
  }*/
}

input:focus input:active {
  outline: none;
}
</style>


