<template>
  <div id="avatarPage">

    <img src="https://freerangestock.com/sample/113540/blue-background.jpg" class="avatarBackground">

    <div v-for="data in Json" :key="data.id" >
        <img :src="`https://i.ibb.co/${data.source}`"  
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
        <a v-for="item in Shop" :key="item.id">
                <button class="button" @click="`show${item.name}`">{{item.name}}</button>
        </a>
    </div>
    <div class="itemsArea">
        <a v-for="item in Shop" :key="item.id">
            <a v-for="i in item.inventory" :key="i" >
            <img :src="`https://i.ibb.co/${i}`">
            </a>
        </a>
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
        data() {
            return {
                isLoggedin: true,
                currentUser: true,
                Json: json,
                Shop: shop,
                isShow: false
            };
        },
        meethod(){

        }
    }

</script>

<style scoped>

.avatarBackground{
    border-radius: 9%;
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: 4px solid rgb(117, 117, 117);
    padding: 0px;
    height: 370px;
    width: 400px;
    
}

.itemsArea{
    position: relative;
    background-color: #698ad8;
    top: 9px;
    border-radius: 6px;
}

.button{
  display: inline-block;
  padding: 9px 20px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  outline: none;
  color: #fff;
  background-color: #316ff5;
  border-radius: 6px;
  box-shadow: 0 9px rgb(114, 114, 114);
}

.button:hover{
    background-color: #577dd6;
}

.button:focus{
    background-color: #698ad8;
    transform: translateY(11px);
    box-shadow: none;
}

</style>