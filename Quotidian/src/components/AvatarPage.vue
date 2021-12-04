<template>
  <div id="avatarPage">

<div class="avatarBackground" style="position:relative">
    <div v-for="data in userAvatar" :key="data.id" >
        <img :src="`https://i.ibb.co/${data.source}`"
        :id="`${data.name}`"  
            :style= 
                "`
                z-index: ${data.layer};
                position:absolute; 
                height: 500px;
                top: 0em;
                left: -5%;
                clip: rect(29px, 400px, 450px, 0);
                `"
        >
        
      

    </div>
</div>
    <br>
    
    <div>
        <a v-for="item in Shop" :key="item.name">
            <button class="button" @click="show(item.name)">{{item.name}}</button>
        </a>
    </div>

    <div class="itemsArea" style="clear:both">
      <!--   <a v-for="item in Shop" :key="item.name">
            <div class="itmems" v-if="item.name">
            <button v-on:click="setNoseDB(item.source,((item.id)-1))" class="avatarButton"><img :src="`https://i.ibb.co/${item.source}`"></button>
            </div>
         </a>   
    </div> -->
        <div class="itmems" v-if="face">
            <button v-on:click="setNoseDB('yXmkvJX/face1.png',0)" class="avatarButton"><img src= "https://i.ibb.co/yXmkvJX/face1.png" class="item"></button>
            <button v-on:click="setNoseDB('JvfJb4K/face2.png',0)" class="avatarButton"><img src= "https://i.ibb.co/JvfJb4K/face2.png" class="item"></button>
            <button v-on:click="setNoseDB('nLMVbzP/face3.png',0)" class="avatarButton"><img src= "https://i.ibb.co/nLMVbzP/face3.png" class="item"></button>
            <button v-on:click="setNoseDB('YbXQLvz/face4.png',0)" class="avatarButton"><img src= "https://i.ibb.co/YbXQLvz/face4.png" class="item"></button>
            <button v-on:click="setNoseDB('SKDxwJh/face5.png',0)" class="avatarButton"><img src= "https://i.ibb.co/SKDxwJh/face5.png" class="item"></button>
        </div>
        <div class="itmems" v-if="mouth">
            <button v-on:click="setNoseDB('9gcDc7m/mouth1.png',2)" class="avatarButton"><img src= "https://i.ibb.co/9gcDc7m/mouth1.png" class="item"></button>
            <button v-on:click="setNoseDB('YydVm1m/mouth2.png',2)" class="avatarButton"><img src= "https://i.ibb.co/YydVm1m/mouth2.png" class="item"></button>
            <button v-on:click="setNoseDB('Kb6zD2k/mouth3.png',2)" class="avatarButton"><img src= "https://i.ibb.co/Kb6zD2k/mouth3.png" class="item"></button>
            <button v-on:click="setNoseDB('fFy4vzh/mouth4.png',2)" class="avatarButton"><img src= "https://i.ibb.co/fFy4vzh/mouth4.png" class="item"></button>
            <button v-on:click="setNoseDB('sggnv4Q/mouth5.png',2)" class="avatarButton"><img src= "https://i.ibb.co/sggnv4Q/mouth5.png" class="item"></button>
        </div>
        <div class="itmems" v-if="eye">
            <button v-on:click="setNoseDB('LJkLv0w/eye1.png',1)" class="avatarButton"><img src= "https://i.ibb.co/LJkLv0w/eye1.png" class="item"></button>
            <button v-on:click="setNoseDB('WfDLgLY/eye2.png',1)" class="avatarButton"><img src= "https://i.ibb.co/WfDLgLY/eye2.png" class="item"></button>
            <button v-on:click="setNoseDB('g3BDLhq/eye3.png',1)" class="avatarButton"><img src= "https://i.ibb.co/g3BDLhq/eye3.png" class="item"></button>
            <button v-on:click="setNoseDB('GCs470k/eye4.png',1)" class="avatarButton"><img src= "https://i.ibb.co/GCs470k/eye4.png" class="item"></button>
        </div>
        <div class="itmems" v-if="nose">
            <button v-on:click="setNoseDB('vwyfdZ7/nose1.png',3)" class="avatarButton"><img src= "https://i.ibb.co/vwyfdZ7/nose1.png" class="item"></button>
            <button v-on:click="setNoseDB('xG60wWw/nose2.png',3)" class="avatarButton"><img src= "https://i.ibb.co/xG60wWw/nose2.png" class="item"></button>
            <button v-on:click="setNoseDB('gZXdNx7/nose3.png',3)" class="avatarButton"><img src= "https://i.ibb.co/gZXdNx7/nose3.png" class="item"></button>
            <button v-on:click="setNoseDB('Dz702QP/nose4.png',3)" class="avatarButton"><img src= "https://i.ibb.co/Dz702QP/nose4.png" class="item"></button>
        </div>
        <div class="itmems" v-if="brow">
            <button v-on:click="setNoseDB('McjTk9b/brow1.png',4)" class="avatarButton"><img src= "https://i.ibb.co/McjTk9b/brow1.png" class="item"></button>
            <button v-on:click="setNoseDB('9YcwTF6/brow2.png',4)" class="avatarButton"><img src= "https://i.ibb.co/9YcwTF6/brow2.png" class="item"></button>
            <button v-on:click="setNoseDB('jzvXwND/brow3.png',4)" class="avatarButton"><img src= "https://i.ibb.co/jzvXwND/brow3.png" class="item"></button>
            <button v-on:click="setNoseDB('pRf0gkZ/brow4.png',4)" class="avatarButton"><img src= "https://i.ibb.co/pRf0gkZ/brow4.png" class="item"></button>
        </div>
        <div class="itmems" v-if="hair">
            <button v-on:click="setNoseDB('XznYfkk/hair1.png',5)" class="avatarButton"><img src= "https://i.ibb.co/XznYfkk/hair1.png" class="item"></button>
            <button v-on:click="setNoseDB('NYxMWNp/hair2.png',5)" class="avatarButton"><img src= "https://i.ibb.co/NYxMWNp/hair2.png" class="item"></button>
            <button v-on:click="setNoseDB('qJrRKvg/hair4.png',5)" class="avatarButton"><img src= "https://i.ibb.co/qJrRKvg/hair4.png" class="item"></button>
            <button v-on:click="setNoseDB('FJCZ966/hair5.png',5)" class="avatarButton"><img src= "https://i.ibb.co/FJCZ966/hair5.png" class="item"></button>
        </div>
        <div class="itmems" v-if="accessory">
            <button v-on:click="setNoseDB('TLdd03X/acc1.png',6)" class="avatarButton"><img src= "https://i.ibb.co/TLdd03X/acc1.png" class="item"></button>
            <button v-on:click="setNoseDB('RNVc1MN/acc2.png',6)" class="avatarButton"><img src= "https://i.ibb.co/RNVc1MN/acc2.png" class="item"></button>
            <button v-on:click="setNoseDB('d6C3fhn/acc3.png',6)" class="avatarButton"><img src= "https://i.ibb.co/d6C3fhn/acc3.png" class="item"></button>
        </div>
    </div>  
  </div>

</template>

<script>
   
    import shop from "./shop.json";
    //import json from "./dData.json";
    import db from "./firebaseInit";
    import firebase from "firebase";
    var auth= firebase.auth();
  
  
    export default {
        name: "avatar",
        data: function() {
            return {
                isLoggedin: true,
                currentUser: true,
                //Json: json,
                Shop: shop,
                face: true,
                eye: false,
                mouth: false,
                nose: false,
                brow: false,
                hair: false,
                accessory: false,
                userAvatar: []
    
            }
        },
      /*  
       name: "userAvatar",
        data: function () {
           return {
               id: 1,
               source: "",
               layer: 10,
               userAvatar: []
            }
        },
        */
        methods: {
            
           setNoseDB: function(ID,index){
               //takes in the img src of each png, and index of it in the database
                var imgsrc =  ID
                var userID = auth.currentUser.uid;
                 db.collection('users').doc(userID).get().then((querySnapshot) =>{
                   var currAva = [];
                    currAva = querySnapshot.data().inventory
                   currAva[index].source = imgsrc
                   db.collection('users').doc(userID).update({
                       //updates the inventory in the database with newly selected item
                        inventory: currAva       
                    })
                   this.setUserAvatar()
  
               })
             
            },
            setUserAvatar: function(){
                var userID = auth.currentUser.uid;
                db.collection('users').doc(userID).get().then((querySnapshot) =>{
                  //allows to redraw at each function call, keeping it updated.
                    //creates snapshot at usersID
                    var currAvatar= [];
                    var ava = [];
                    ava = this.Json
                    currAvatar = querySnapshot.data().inventory
                    for(let i =0; i < currAvatar.length; i++){
                       this.userAvatar[i] = currAvatar[i]
                    } 
                                      this.$forceUpdate()
                })
            },
            show: function (part) {
                if(part=="face"){
                    this.face=true;
                    this.mouth = this.eye = this.nose = this.brow = this.hair = this.accessory = false;
                }
                else if(part=="mouth"){
                    this.mouth=true;
                    this.face = this.eye = this.nose = this.brow = this.hair = this.accessory = false;
                }
                else if(part=="eye"){
                    this.eye=true;
                    this.face = this.mouth = this.nose = this.brow = this.hair = this.accessory = false;
                }
                else if(part=="nose"){
                    this.nose=true;
                    this.face = this.eye = this.mouth = this.brow = this.hair = this.accessory = false;
                }
                else if(part=="brow"){
                    this.brow=true;
                    this.face = this.eye = this.nose = this.mouth = this.hair = this.accessory = false;
                }
                else if(part=="hair"){
                    this.hair=true;
                    this.face = this.eye = this.nose = this.brow = this.mouth = this.accessory = false;
                }
                else if(part=="accessory"){
                    this.accessory=true;
                    this.face = this.eye = this.nose = this.brow = this.hair = this.mouth = false;
                }
            },
        },
    }
</script>

<style scoped>
.item{
    border: 4px solid rgb(0, 0, 0);
    width:250px;
}
.avatarBackground{
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    border-radius: 9%;
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: 8px solid rgb(0, 0, 0);
    padding: 0px;
    height: 370px;
    width: 400px;
    background-color: #316ff5;
}
.itemsArea{
    position: relative;
    background-color: #698ad8;
    top: 9px;
    border-radius: 6px;
    border: 0px solid rgb(0, 0, 0);
}
.button{
  padding: 9px 20px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  outline: none;
  color: #fff;
  background-color: #316ff5;
  border-radius: 6px;
  box-shadow: 0 9px rgb(0, 0, 0);
  float: left;
  border: 4px solid rgb(0, 0, 0);
}
.avatarButton{
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;  
  padding: 9px 20px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  outline: none;
  color: #fff;
  background-color: #316ff5;
  border-radius: 6px;
  box-shadow: 0 9px rgb(0, 0, 0);
  float: left;
  border: 4px solid rgb(0, 0, 0);
}
.avatarButton:hover{
    background-color: #6f94ec;
}
.avatarButton:active{
    background-color: #698ad8;
    transform: scaleY(1.02) scaleX(1.02);
}
.button:hover{
    background-color: #6f94ec;
}
.button:active{
    background-color: #698ad8;
    transform: translateY(4px);
}
</style>