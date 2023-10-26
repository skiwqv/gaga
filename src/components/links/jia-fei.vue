<template>
    <div>
        <img alt="gaga logo" @click="playAudio" class="gagaImg" src="@/assets/jiafei.jpg">
        <audio ref="boom">
          <source src="@/assets/songs/mermid.mp3" type="audio/mp3">
        </audio>
      </div>
</template>

<script setup>
import { ref } from "vue"

const boom = ref(null)
const pause = ref(false)

const playAudio = () => {
  if (pause.value == false) {
    boom.value.play()
    pause.value = true
  } else {
    boom.value.pause()
    pause.value = false
  }
}
</script>

<style>
.gagaImg {
  position: absolute;
  width: 400px;
  height: 400px;
  top: 50%;
  left: 50%;
  cursor: pointer;
  border-radius: 90%;
  transform: translate(-50%, -50%);
}
@media only screen  and (max-width: 480px) {
  .gagaImg {
    width: 250px;
    height: 250px;
  }
}


@media only screen and (min-width: 481px) and (max-width: 768px) {
  .gagaImg {
    width: 250px;
    height: 250px;
  }
}


@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .gagaImg {
    width: 350px;
    height: 350px;
  }
}


@media only screen and (min-width: 1025px) and (max-width: 1200px) {
  .gagaImg {
    width: 400px;
    height: 400px;
  }
}


@media only screen and (min-width: 1201px) {
  .gagaImg {
    width: 500px;
    height: 500px;
  }
}
</style>