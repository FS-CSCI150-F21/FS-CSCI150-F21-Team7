<template>
  <div id="avatarPage">

    <img src="https://freerangestock.com/sample/113540/blue-background.jpg" class="avatarBackground">

    <div v-for="data in Json" :key="data.id" >
        <img :src="`https://i.ibb.co/${data.source}`"
        :id="`${data.name}`"  
            :style= 
                "`
                z-index: ${data.layer};
                position:absolute; 
                height: 500px;
                top: 5em;
                left: 38%;
                clip: rect(29px, 400px, 450px, 0);
                `"
        >
    </div>
    <br>
    
    <div>
        <a v-for="item in Shop" :key="item.name">
            <button class="button" @click="show(item.name)">{{item.name}}</button>
        </a>
    </div>

    <div class="itemsArea" style="clear:both">
        <div class="itmems" v-if="face">
            <button class="avatarButton"><img src= "https://i.ibb.co/yXmkvJX/face1.png" class="item"></button>
            <button class="avatarButton"><img src= "https://i.ibb.co/JvfJb4K/face2.png" class="item"></button>
            <button class="avatarButton"><img src= "https://i.ibb.co/nLMVbzP/face3.png" class="item"></button>
            <button class="avatarButton"><img src= "https://i.ibb.co/YbXQLvz/face4.png" class="item"></button>
            <button class="avatarButton"><img src= "https://i.ibb.co/SKDxwJh/face5.png" class="item"></button>
        </div>
        <div class="itmems" v-if="mouth">
            <button class="avatarButton"><img src= "https://i.ibb.co/9gcDc7m/mouth1.png" class="item"></button>
            <button class="avatarButton"><img src= "https://i.ibb.co/YydVm1m/mouth2.png" class="item"></button>
            <button class="avatarButton"><img src= "https://i.ibb.co/Kb6zD2k/mouth3.png" class="item"></button>
            <button class="avatarButton"><img src= "https://i.ibb.co/fFy4vzh/mouth4.png" class="item"></button>
            <button class="avatarButton"><img src= "https://i.ibb.co/sggnv4Q/mouth5.png" class="item"></button>
        </div>
        <div class="itmems" v-if="eye">
            <button class="avatarButton"><img src= "https://i.ibb.co/LJkLv0w/eye1.png" class="item"></button>
            <button class="avatarButton"><img src= "https://i.ibb.co/WfDLgLY/eye2.png" class="item"></button>
            <button class="avatarButton"><img src= "https://i.ibb.co/g3BDLhq/eye3.png" class="item"></button>
            <button class="avatarButton"><img src= "https://i.ibb.co/GCs470k/eye4.png" class="item"></button>
        </div>
        <div class="itmems" v-if="nose">
            <button class="avatarButton"><img src= "https://i.ibb.co/vwyfdZ7/nose1.png" class="item"></button>
            <button class="avatarButton"><img src= "https://i.ibb.co/xG60wWw/nose2.png" class="item"></button>
            <button class="avatarButton"><img src= "https://i.ibb.co/gZXdNx7/nose3.png" class="item"></button>
            <button class="avatarButton"><img src= "https://i.ibb.co/Dz702QP/nose4.png" class="item"></button>
        </div>
        <div class="itmems" v-if="brow">
            <button class="avatarButton"><img src= "https://i.ibb.co/McjTk9b/brow1.png" class="item"></button>
            <button class="avatarButton"><img src= "https://i.ibb.co/9YcwTF6/brow2.png" class="item"></button>
            <button class="avatarButton"><img src= "https://i.ibb.co/jzvXwND/brow3.png" class="item"></button>
            <button class="avatarButton"><img src= "https://i.ibb.co/pRf0gkZ/brow4.png" class="item"></button>
        </div>
        <div class="itmems" v-if="hair">
            <button class="avatarButton"><img src= "https://i.ibb.co/XznYfkk/hair1.png" class="item"></button>
            <button class="avatarButton"><img src= "https://i.ibb.co/NYxMWNp/hair2.png" class="item"></button>
            <button class="avatarButton"><img src= "https://i.ibb.co/qJrRKvg/hair4.png" class="item"></button>
            <button class="avatarButton"><img src= "https://i.ibb.co/FJCZ966/hair5.png" class="item"></button>
        </div>
        <div class="itmems" v-if="accessory">
            <button class="avatarButton"><img src= "https://i.ibb.co/TLdd03X/acc1.png" class="item"></button>
            <button class="avatarButton"><img src= "https://i.ibb.co/RNVc1MN/acc2.png" class="item"></button>
            <button class="avatarButton"><img src= "https://i.ibb.co/d6C3fhn/acc3.png" class="item"></button>
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
    import shop from "./shop.json"
    import json from "./dData.json"

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
        methods: {
            sayhi(){
                alert("hello");
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
    border-radius: 9%;
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: 8px solid rgb(0, 0, 0);
    padding: 0px;
    height: 370px;
    width: 400px;
    
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
    background-color: #577dd6;
}

.avatarButton:active{
    background-color: #698ad8;
    transform: scaleY(1.02) scaleX(1.02);
    box-shadow: 0 9px rgb(0, 0, 0);
}

.button:hover{
    background-color: #577dd6;
}

.button:active{
    background-color: #698ad8;
    transform: translateY(4px);
    box-shadow: 0 9px rgb(0, 0, 0);
}

</style>