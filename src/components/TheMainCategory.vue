<script setup lang="ts">
import {ref, reactive, watch, computed, onBeforeMount} from "vue";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";

const categoryList = ref([]);

onBeforeMount(async () => {
  const querySnapshot = await getDocs(collection(db, "categories"));
  querySnapshot.forEach((doc) => {
    categoryList.value.push(doc.data());
  });
});
console.log(categoryList.value);


</script>

<template>
  <div class="container category__container">
    <h2 class="category__container-title">
      WYBIERZ KATEGORIĘ I PRZEJDŹ DO SKLEPU
    </h2>
  </div>
  <div class="category__container">
    <div class="category__container-box" v-for="category in categoryList" :key="category.uid">
      <img :src="category.imageUrl" :alt="category.name">
      <h2>{{ category.name }}</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.category__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 50px auto 0;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  .category__container-title {
    font-size: 2.25rem;
    line-height: 1.1;
    font-weight: 400;
    letter-spacing: 0.1px
  }
}
.category__container-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 300px;
  margin: 20px;
  cursor: pointer;
 h2 {
   text-transform: uppercase;
 }
}
</style>