<template>
    <div class="Fullpage">
        <div class="profilename">{{ currentUser }}</div>
        <div class="pfp"><img class="myPic" v-bind:src="ProfilePic"></div>
        <div class="desp">{{ adesp }}</div>
        <div class="editbox" v-if="showbox"><textarea class="txt" type="text" v-model="inputValue"></textarea></div>
        <div class="edit">
        <button v-on:click="revealbox()" v-if="showbox">Canel</button>
        <button v-on:click="enterEdit()" v-if="showbox">Enter Edit</button>
        <button v-on:click="revealbox()" v-if="!showbox">Edit Description</button>
        </div>
    </div>
</template>

<script>
import image from './qPics/Madmaw.png';
import firebase from "firebase";

export default{
    name: "profile",
    props:['name', 'value'],
    computed:{
        inputvalue:{
            get(){
                return this.value;
            },
            set(val){
                this.$emit('updated', val);
            }
        }
    },
    data() {
        return{
            isLoggedin: false,
            currentUser: false,
            showbox: true,
            editdesp: '',
            ProfilePic: image,
            adesp: 'Hello my name is Ted. I am always very very mad.'
        }
    },
    methods:{
        revealbox(){
            this.showbox = !this.showbox
        },
        enterEdit(){
            this.editdesp = this.inputvalue
            this.adesp = this.editdesp
            this.revealbox()
        }
    },
    created() {
    if (firebase.auth().currentUser) {
      this.isLoggedin = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
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