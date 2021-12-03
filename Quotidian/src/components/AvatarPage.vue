<template>
  <div id="avatarPage">

<div class="avatarBackground" style="position:relative">
    <div v-for="data in Json" :key="data.id" >
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
        <div class="itmems" v-if="face">
            <button v-on:click="setFaceDB('yXmkvJX/face1.png')" class="avatarButton"><img src= "https://i.ibb.co/yXmkvJX/face1.png" class="item"></button>
            <button v-on:click="setFaceDB('JvfJb4K/face2.png')" class="avatarButton"><img src= "https://i.ibb.co/JvfJb4K/face2.png" class="item"></button>
            <button v-on:click="setFaceDB('nLMVbzP/face3.png')" class="avatarButton"><img src= "https://i.ibb.co/nLMVbzP/face3.png" class="item"></button>
            <button v-on:click="setFaceDB('YbXQLvz/face4.png')" class="avatarButton"><img src= "https://i.ibb.co/YbXQLvz/face4.png" class="item"></button>
            <button v-on:click="setFaceDB('SKDxwJh/face5.png')" class="avatarButton"><img src= "https://i.ibb.co/SKDxwJh/face5.png" class="item"></button>
        </div>
        <div class="itmems" v-if="mouth">
            <button v-on:click="setMouthDB('9gcDc7m/mouth1.png')" class="avatarButton"><img src= "https://i.ibb.co/9gcDc7m/mouth1.png" class="item"></button>
            <button v-on:click="setMouthDB('YydVm1m/mouth2.png')" class="avatarButton"><img src= "https://i.ibb.co/YydVm1m/mouth2.png" class="item"></button>
            <button v-on:click="setMouthDB('Kb6zD2k/mouth3.png')" class="avatarButton"><img src= "https://i.ibb.co/Kb6zD2k/mouth3.png" class="item"></button>
            <button v-on:click="setMouthDB('fFy4vzh/mouth4.png')" class="avatarButton"><img src= "https://i.ibb.co/fFy4vzh/mouth4.png" class="item"></button>
            <button v-on:click="setMouthDB('sggnv4Q/mouth5.png')" class="avatarButton"><img src= "https://i.ibb.co/sggnv4Q/mouth5.png" class="item"></button>
        </div>
        <div class="itmems" v-if="eye">
            <button v-on:click="setEyeDB('LJkLv0w/eye1.png')" class="avatarButton"><img src= "https://i.ibb.co/LJkLv0w/eye1.png" class="item"></button>
            <button v-on:click="setEyeDB('WfDLgLY/eye2.png')" class="avatarButton"><img src= "https://i.ibb.co/WfDLgLY/eye2.png" class="item"></button>
            <button v-on:click="setEyeDB('g3BDLhq/eye3.png')" class="avatarButton"><img src= "https://i.ibb.co/g3BDLhq/eye3.png" class="item"></button>
            <button v-on:click="setEyeDB('GCs470k/eye4.png')" class="avatarButton"><img src= "https://i.ibb.co/GCs470k/eye4.png" class="item"></button>
        </div>
        <div class="itmems" v-if="nose">
            <button v-on:click="setNoseDB('vwyfdZ7/nose1.png')" class="avatarButton"><img src= "https://i.ibb.co/vwyfdZ7/nose1.png" class="item"></button>
            <button v-on:click="setNoseDB('xG60wWw/nose2.png')" class="avatarButton"><img src= "https://i.ibb.co/xG60wWw/nose2.png" class="item"></button>
            <button v-on:click="setNoseDB('gZXdNx7/nose3.png')" class="avatarButton"><img src= "https://i.ibb.co/gZXdNx7/nose3.png" class="item"></button>
            <button v-on:click="setNoseDB('Dz702QP/nose4.png')" class="avatarButton"><img src= "https://i.ibb.co/Dz702QP/nose4.png" class="item"></button>
        </div>
        <div class="itmems" v-if="brow">
            <button v-on:click="setBrowDB('McjTk9b/brow1.png')" class="avatarButton"><img src= "https://i.ibb.co/McjTk9b/brow1.png" class="item"></button>
            <button v-on:click="setBrowDB('9YcwTF6/brow2.png')" class="avatarButton"><img src= "https://i.ibb.co/9YcwTF6/brow2.png" class="item"></button>
            <button v-on:click="setBrowDB('jzvXwND/brow3.png')" class="avatarButton"><img src= "https://i.ibb.co/jzvXwND/brow3.png" class="item"></button>
            <button v-on:click="setBrowDB('pRf0gkZ/brow4.png')" class="avatarButton"><img src= "https://i.ibb.co/pRf0gkZ/brow4.png" class="item"></button>
        </div>
        <div class="itmems" v-if="hair">
            <button v-on:click="setHairDB('XznYfkk/hair1.png')" class="avatarButton"><img src= "https://i.ibb.co/XznYfkk/hair1.png" class="item"></button>
            <button v-on:click="setHairDB('NYxMWNp/hair2.png')" class="avatarButton"><img src= "https://i.ibb.co/NYxMWNp/hair2.png" class="item"></button>
            <button v-on:click="setHairDB('qJrRKvg/hair4.png')" class="avatarButton"><img src= "https://i.ibb.co/qJrRKvg/hair4.png" class="item"></button>
            <button v-on:click="setHairDB('FJCZ966/hair5.png')" class="avatarButton"><img src= "https://i.ibb.co/FJCZ966/hair5.png" class="item"></button>
        </div>
        <div class="itmems" v-if="accessory">
            <button v-on:click="setAccDB('TLdd03X/acc1.png')" class="avatarButton"><img src= "https://i.ibb.co/TLdd03X/acc1.png" class="item"></button>
            <button v-on:click="setAccDB('RNVc1MN/acc2.png')" class="avatarButton"><img src= "https://i.ibb.co/RNVc1MN/acc2.png" class="item"></button>
            <button v-on:click="setAccDB('d6C3fhn/acc3.png')" class="avatarButton"><img src= "https://i.ibb.co/d6C3fhn/acc3.png" class="item"></button>
        </div>
        
    </div>
<!--   <a v-for="item in Shop" :key="item.id" >
        <a v-for="i in item.inventory" :key="i" >
            <img :src="`https://i.ibb.co/${i}`">
        </a>
            <br>  
    </a>
-->
  </div>

</template>

<script>
    import shop from "./shop.json";
    import json from "./dData.json";
    import db from "./firebaseInit";
    import firebase from "firebase";
    var auth= firebase.auth();
    //var userID = auth.currentUser.uid;
    //var exists = false;
  
    export default {
        name: "avatar",
        data: function() {
            return {
                isLoggedin: true,
                currentUser: true,
                Json: json,
                Shop: shop,
                face: true,
                eye: false,
                mouth: false,
                nose: false,
                brow: false,
                hair: false,
                accessory: false,
            };
        },
        /*
       name: "userAvatar",
        data() {
           return {
                nose: [
                        { id: ""},
                         {source: ""},
                         {layer: 25},
                ],
                 hair: [
                        { id: ""},
                         {source: ""},
                         {layer: 35},
                 ],
                acc: [
                        { id: ""},
                         {source: ""},
                         {layer: 40},
                ],
                eye: [
                         { id: ""},
                         {source: ""},
                         {layer: 15},
                        ],
                 brow: [
                         { id: ""},
                         {source: ""},
                         {layer: 30},
                 ],
                 face: [
                         { id: ""},
                         {source: ""},
                         {layer: 10},
                     ],
                      mouth: [
                         { id: ""},
                         {source: ""},
                         {layer: 20},
                        ]
                    } 
            },*/
       
        
        methods: {
           setNoseDB: function(noseID){
                var imgsrc =  noseID
                var userID = auth.currentUser.uid;
        
             db.collection('users').doc(userID).update({
            
                    nose: {
                         id: "4",
                         source: imgsrc,
                         layer: 25,
                        }
                    
                })
            },
            setHairDB: function(hairID){
                 var imgsrc =  hairID
                var userID = auth.currentUser.uid;
                db.collection('users').doc(userID).update({
                     
                    hair: {
                        id: "6",
                         source: imgsrc,
                         layer: 35,
                        }
                    
                })
            },
            setAccDB: function(accID){
                 var imgsrc =  accID
                var userID = auth.currentUser.uid;
                
                db.collection('users').doc(userID).update({
                    acc: {
                         id: "7",
                         source: imgsrc,
                         layer: 40,
                        }
                    
                })
            },
            setEyeDB: function(eyeID){
                 var imgsrc =  eyeID
                var userID = auth.currentUser.uid;
                db.collection('users').doc(userID).update({
                       eye: {
                         id: "2",
                         source: imgsrc,
                         layer: 15,
                        }
                    
                })
            },
            setBrowDB: function(browID){
                 var imgsrc =  browID
                var userID = auth.currentUser.uid;
                
                db.collection('users').doc(userID).update({
                   brow: {
                         id: "5",
                         source: imgsrc,
                         layer: 30,
                        }
                     
                })
            },
            setFaceDB: function(faceID){
                 var imgsrc =  faceID
                var userID = auth.currentUser.uid;
                
                db.collection('users').doc(userID).update({
                         face: {
                         id: "1",
                         source: imgsrc,
                         layer: 10,
                     }
                    
                })
            },
             setMouthDB: function(mouthID){
                 var imgsrc =  mouthID
                var userID = auth.currentUser.uid;
                
                db.collection('users').doc(userID).update({
                    mouth: {
                         id: "3",
                         source: imgsrc,
                         layer: 20,
                        }
                    
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