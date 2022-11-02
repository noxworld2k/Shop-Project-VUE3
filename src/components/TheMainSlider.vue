<template>
  <carousel>
<!-- ToDo Reapir sliders-->
    <slide
      v-for="slide in sliders"
      class="slide"
      :key="slide.uid"
      :style="`background-image: url(${slide.imageUrl})`"
    >
      <div class="slide__content">
        <h1>{{ slide.title }}</h1>
        <p>{{ slide.desc }}</p>
      </div>
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { ref, onBeforeMount } from "vue";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

const sliders = ref([]);
console.log(sliders);

onBeforeMount(async () => {
  const querySnapshot = await getDocs(collection(db, "sliders"));
  querySnapshot.forEach((doc) => {
    sliders.value.push(doc.data());
  });
});

</script>
<style scoped lang="scss">
.slide {
  display: flex;
  justify-content: flex-end;
  height: 60vh;
  width: 100%;
}
.slide__content {
  width: 400px;
  margin-right: 15%;
  display: flex;
  flex-direction: column;
  align-self: center;
  h1,
  p {
    color: black;
    text-align: end;
  }
  h2 {
    font-size: 2.6rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.6rem;
    font-weight: 400;
  }
}
</style>
