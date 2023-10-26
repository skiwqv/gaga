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
    <!-- <input  type="checkbox" @click="openMenu" role="button" aria-label="Display the menu" class="menu"> -->
    <burger-icon class="menu" @click="openMenu"></burger-icon>    
    <div v-if="isOpen" class="menu_fixed">
      <router-link  v-for="link in links" :key="link" :to="link.to" active-class="menu-active" class="menu__link">{{ link.name }}</router-link>
    </div>
  </div>
</template>

<script setup>
import {ref } from "vue";
import VueHorizontal from "vue-horizontal";
import burgerIcon from "@/components/burger-icon.vue"

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

.menu{
  position: absolute;
  top: 20px;
  width: 30px;
  height: 30px;
  display: none;
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
    top:-50px;
    opacity: 1;
    z-index: 999;
    right: 45px;
  }
  .menu_fixed {
    display: block;
    transition: all 10s;
    animation: slide-in 1s;
  }
}</style>