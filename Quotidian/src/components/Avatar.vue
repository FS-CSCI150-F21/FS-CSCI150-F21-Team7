<template>
  <div id="avatar">
    <a v-for="data in Json" :key="data.id" >
    <img :src="`https://i.ibb.co/${data.source}`" :style="`z-index: ${data.layer}; position:absolute; object-fit: cover; object-position: 20% 10%;`">
    </a>
  </div>
</template>

<script>
  import json from "./dData.json"

  export default {
    name: "avatar",
    data() {
      return {
        isLoggedin: true,
        currentUser: true,
        Json: json
      };
    },
  }

</script>
