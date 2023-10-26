<template>
  <div class="navbar">
    <vue-horizontal class="horizontal" snap="start" :button="true" responsive>
      <template v-slot:btn-next>
        <div class="replaced-btn">
          <img src="@/assets/boldr.svg" alt="">
        </div>
      </template>
      <template v-slot:btn-prev>
        <div class="replaced-btn">
          <img src="@/assets/boldl.svg" alt="">
        </div>
      </template>
      <section class="section" v-for="link in links" :key="link">
        <router-link :to="link.to" active-class="navbar-active" class="navbar__link">{{ link.name }}</router-link>
      </section>
    </vue-horizontal>
    <input  type="checkbox" @click="openMenu" role="button" aria-label="Display the menu" class="menu">
    <div v-if="isOpen" class="menu_fixed">
      <router-link  v-for="link in links" :key="link" :to="link.to" active-class="menu-active" class="menu__link">{{ link.name }}</router-link>
    </div>    
  </div>
</template>

<script setup>
import {ref } from "vue";
import VueHorizontal from "vue-horizontal";

const links = ref([{
  name: 'GAGA',
  to: '/'
}, {
  name: 'JIAFEI',
  to: '/jiafei'
}, {
  name: 'CUPCAKE',
  to: '/cupcake'
}, {
  name: 'AJIANA',
  to: '/ajiana'
}, {
  name: 'PON MI',
  to: '/deja'
}, {
  name: 'JIA DEL FEI',
  to: '/jiadel'
}])

const isOpen = ref(false)

function openMenu() {
  isOpen.value = !isOpen.value
  console.log('isOpen', isOpen.value);
}

</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 100px;
}

.section {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 40%;
}

.menu {
  --s: 30px;
  /* control the size */
  --c: white;
  /* the color */
  display: none;

  height: var(--s);
  aspect-ratio: 1;
  opacity: 0.7;
  border: none;
  padding: 0;
  border-inline: calc(var(--s)/2) solid #0000;
  box-sizing: content-box;
  --_g1: linear-gradient(var(--c) 20%, #0000 0 80%, var(--c) 0) no-repeat content-box border-box;
  --_g2: radial-gradient(circle closest-side at 50% 12.5%, var(--c) 95%, #0000) repeat-y content-box border-box;
  background:
    var(--_g2) left var(--_p, 0px) top,
    var(--_g1) left calc(var(--s)/10 + var(--_p, 0px)) top,
    var(--_g2) right var(--_p, 0px) top,
    var(--_g1) right calc(var(--s)/10 + var(--_p, 0px)) top;
  background-size:
    20% 80%,
    40% 100%;
  position: relative;
  clip-path: inset(0 25%);
  -webkit-mask: linear-gradient(90deg, #0000, #000 25% 75%, #0000);
  cursor: pointer;
  transition:
    background-position .3s var(--_s, .3s),
    clip-path 0s var(--_s, .6s);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.menu:before,
.menu:after {
  content: "";
  position: absolute;
  border-radius: var(--s);
  inset: 40% 0;
  background: var(--c);
  transition: transform .3s calc(.3s - var(--_s, .3s));
}

.menu:checked {
  clip-path: inset(0);
  --_p: calc(-1*var(--s));
  --_s: 0s;
}

.menu:checked:before {
  transform: rotate(45deg);
}

.menu:checked:after {
  transform: rotate(-45deg);
}

.menu:focus-visible {
  clip-path: none;
  -webkit-mask: none;
  border: none;
  outline: 2px solid var(--c);
  outline-offset: 5px;
}

.replaced-btn {
  background-color: white;
  border-radius: 90%;
  width: 40px;
  height: 40px;
  opacity: 0.7;
}

.navbar__link {
  color: #fff;
  font-size: 30px;
  cursor: pointer;
  transition: all .3s;
  text-decoration: none;
  margin-top: 20px;
}

.navbar__link:hover {
  font-size: 50px;
  opacity: 0.6;
}

.navbar-active {
  font-size: 50px;
}

.menu_fixed {
  position: absolute;
  display: none;
  top: 0;
  width: 70%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.479);
  right: 0;
  z-index: 1;
}

@keyframes slide-in {
  to{
    transform: translateX(0);
  }
  from{
    transform: translateX(100%);
  }
}
.menu__link {
  display: flex;
  font-size: 50px;
  background-color: #fff;
  opacity: 0.6;
  margin-bottom: 30px;
  margin-top: 50px;
  color: #000;
  cursor: pointer;
  animation: slide-in 0.3s;
  transition: all .3s;
  text-decoration: none;
}

.menu-active {
  opacity: 1;
}

@media only screen and (max-width: 1010px) {
  .section {
    display: none;
  }

  .menu {
    display: block;
    position: absolute;
    z-index: 999;
    right: 30px;
  }
  .menu_fixed {
    display: block;
    transition: all 10s;
    animation: slide-in 1s;
  }
}</style>