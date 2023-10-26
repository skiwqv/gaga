<template>
  <div class="gaga">
    <navBarVue></navBarVue>
      <router-view v-slot="{Component}">
        <transition>
          <component :is="Component"></component>
        </transition>
      </router-view>
  </div>
</template>

<script setup>
import navBarVue from "./components/nav-bar.vue"
</script>

<style>
.gaga {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3);
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.v-enter-from,
.v-leave-to{
  opacity: 0;
}

.v-enter-active, .v-leave-active {
  transition: all .4s ease;
}
</style>
