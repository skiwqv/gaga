<template>
  <div>
    <img
      alt="gaga logo"
      @click="playAudio"
      class="gagaImg"
      src="@/assets/gaga.jpg"
    />
    <audio ref="boom">
      <source :src="song" />
    </audio>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from "vue";
import bad_pusay from "@/assets/songs/bad_pusay.mp3";
import loveg from "@/assets/songs/loveg.mp3";
import papi from "@/assets/songs/papi.mp3";

const boom = ref(null);
const songs = [bad_pusay, loveg, papi];

let song = ref(null);

let isPlaying = ref(false);

const playAudio = () => {
  if (isPlaying.value) {
    song.value.pause();
  } else {
    let randomSong = Math.floor(Math.random() * songs.length);
    song.value = new Audio(songs[randomSong]);
    song.value.play();
  }
  isPlaying.value = !isPlaying.value;
};

onBeforeUnmount(()=>{
  if(isPlaying.value){
    song.value.pause();
  }
})
</script>


<style scoped>
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