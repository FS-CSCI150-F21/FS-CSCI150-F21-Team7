<template>
    <div class="collection with-header">
    <div class="profview left green">
      {{ content }}
    </div>
    <div class="search middle margin:70px blue">
      {{ content2 }}
      <p>Result: {{ wuuds }}</p>
      <input v-model="wuuds" placeholder="Look for someone">
    </div>
      <div class="list right red">
        {{ word }}
        <li v-for="user in users" v-bind:key="user.id" class="collection-item">

        <button v-on:click="toggleOptions">{{user.name}}</button>
        <!--<button v-on:click="seeoptions = !seeoptions">{{user.name}}</button>-->
        <div id="options" v-if="seeoptions">
        <li><button>Follow</button></li>
        <li><button>Block</button></li>  
        <li><button>View Profile</button></li>
        </div> 
      </li>
      </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
  
  name: "followlist",
  data () {
    return {
      users: [],
      loading: true,
      word: 'This is a friends list',
      content: 'Info of User',
      content2: 'A search bar',
      seeoptions: false
    }
  },
  methods:{
    toggleOptions(){
      this.seeoptions = !this.seeoptions
    }
  },
  created () {
      db.collection('users').orderBy('dept').get().then((querySnapshot) => {
        this.loading = false
        querySnapshot.forEach((doc) => {
          const data = {
            'id': doc.id,
            'name': doc.data().name,
            'dept': doc.data().dept,
            //'position': doc.data().position
          }
          this.users.push(data)
        })
      })
    }
}
</script>