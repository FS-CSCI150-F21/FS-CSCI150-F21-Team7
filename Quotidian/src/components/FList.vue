<template>
  <button>
  <div class="friend">
    <img src="https://placehold.it/500x500" alt="" />
    <div class="title">{{ friend.name.first }}&nbsp;{{ friend.name.last }}</div>
    <span class="indicator" v-bind:class="{ online: friend.online }"></span>
    <div class="options" v-if="true">
		<button>Add Friend</button>
	  </div>
  </div>
  </button>
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
.friend {
  display: flex;
  align-items: center;
  padding: 1rem;
}

.indicator {
  min-width: 10px;
  min-height: 10px;
	margin-left: 1rem;
  background: #999;
  border-radius: 999px;
}

  .online {
		margin-left: 1rem;
    background: #00FF00;
  }
</style>