<template>
  <NavbarView/>
  <div class="content">
    <router-view/>
  </div>


</template>

<style>

</style>

<script>
import NavbarView from './components/NavbarView.vue'
export default {
  components: {NavbarView}
}
</script>
