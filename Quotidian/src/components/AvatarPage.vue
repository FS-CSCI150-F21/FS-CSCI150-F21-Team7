<template>
  <div id="avatarPage">
    <div v-for="data in Json" :key="data.id" >
    <img :src="`https://i.ibb.co/${data.source}`" :style="`z-index: ${data.layer};position:absolute;border: 3px solid #ddd; border-radius: 4px; padding: 5px;`">
    </div><br><br><br><br><br><br><br><br><br><br>
    <a v-for="item in Shop" :key="item.id" >
        <a v-for="i in item.inventory" :key="i" >
            <img :src="`https://i.ibb.co/${i}`">
        </a>
            <br>  
    </a>
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
            Shop: shop
        };
        },
    }

</script>
