<template>
  <div class="friend">
    <img src="https://placehold.it/500x500" alt="" />
    <div class="title">{{ friend.name.first }}&nbsp;{{ friend.name.last }}</div>
    <span class="indicator" v-bind:class="{ online: friend.online }"></span>
  </div>
</template>

<script>
export default {
  name: "friend",
  props: ["friend"],
  data() {
    return {
      name: {
        first: "First",
        last: "Lastname",
      },
      online: true,
    };
  },
};
</script>

<style scoped>
</style>