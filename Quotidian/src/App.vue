<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import ViewEmployee from './components/ViewEmployee';
export default {
  name: 'app',
  components: {
    Navbar,
    ViewEmployee
  }
}
</script>

<style>
  nav {
    margin-bottom:10px;
  }
</style>
