<template>
    <div id="profile" class="collection with-header">
    <div class="profview">
    <!--<div v-if="seeoptions1"><img src="./qPics/Madmaw.png" alt="a profile picture" title="Whatever"></div>
    <div v-if="seeoptions3"><img src="./qPics/Abs.jpg" alt="a profile picture" title="Whatever"></div>
    <div v-if="seeoptions2"><img src="./qPics/Taskman.jpg" alt="a profile picture" title="Whatever"></div>-->
    </div>
    <div class="search blue">
            <!--<input type="search" id="query" name="q" placeholder="search...">
            <button v-on:click="searchFunction">Search</button>-->
    </div>
      <div class="list">
        <li><button v-on:click="toggleOptions1">MadMaw</button></li>
        <div id="options" v-if="seeoptions1">
        <button>Follow</button>
        <button>Block</button>  
        <button>View Profile</button>
        </div> 
        <li><button v-on:click="toggleOptions2">The Taskman</button></li>
        <div id="options" v-if="seeoptions2">
        <button>Follow</button>
        <button>Block</button>  
        <button>View Profile</button>
        </div> 
        <li><button v-on:click="toggleOptions3">AbsCutie</button></li>
        <div id="options" v-if="seeoptions3">
        <button>Follow</button>
        <button>Block</button>  
        <button>View Profile</button>
        </div> 
      </div>
    </div>
</template>

<style>
template{
  background-color: blueviolet
}
</style>

<script>
import db from './firebaseInit'
import firebase from "firebase";
var auth = firebase.auth();

export default {
  
  name: "followlist",
  data () {
    return {
      users: [],
      loading: true,
      word: 'This is a friends list',
      content: 'Info of User',
      content2: 'A search bar',
      seeoptions1: false,
      seeoptions2: false,
      seeoptions3: false
    }
  },
  methods:{
    toggleOptions1(){
      this.seeoptions1 = !this.seeoptions1
      this.seeoptions2 = false
      this.seeoptions3 = false
    },
    toggleOptions2(){
      this.seeoptions2 = !this.seeoptions2
      this.seeoptions1 = false
      this.seeoptions3 = false
    },
    toggleOptions3(){
      this.seeoptions3 = !this.seeoptions3
      this.seeoptions2 = false
      this.seeoptions1 = false
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
            //'position': doc.data().position
          }
          this.users.push(data)
        })
      })
    }
}
</script>