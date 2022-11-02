<template>
  <div class="special__offer-counter">
    <h2>
      Promocja kończy się za :
      {{ counter }}
    </h2>
  </div>
  <div class="container__special container">
    <div class="product__list-special">
      <div v-for="product in productsList" :key="product.uid">
        <ProductCard :product="product" />
      </div>
    </div>
    <aside class="container__special-aside">
      <img src="@/assets/img/offer.jpg" alt="offer" />
      <h2 class="container__special-text">
        ZDROWE MIODY Z POLSKICH PASIEK TERAZ -20%
      </h2>
      <button class="container__special-button">Zobacz więcej</button>
    </aside>
  </div>
</template>

<script setup lang="ts">

import ProductCard from "@/components/product/ProductCard.vue";
import { onBeforeMount, ref } from "vue";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/firebase";

const productsList = ref([]);
onBeforeMount(async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    productsList.value.push(doc.data());
  });
});

//Counter
const counter = ref("");
const deadline = new Date("Jan 5, 2023 23:59:59").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();
  const t = deadline - now;
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((t % (1000 * 60)) / 1000);
  counter.value = days + "d " + hours + "g " + minutes + "m " + seconds + "s ";
  if (t < 0) {
    clearInterval(x);
    counter.value = "EXPIRED";
  }
}, 1000);
</script>

<style scoped lang="scss">
.special__offer-counter {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto 0;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;

  h2 {
    padding: 2rem;
    font-size: 2rem;
    line-height: 1.1;
    font-weight: 400;
    letter-spacing: 0.1px;
    color: #ff0000;
    font-family: Open Sans, sans-serif;
  }
}

.product__list-special {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;

  div {
    align-self: flex-start;
  }
}

.container__special {
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  aside {
    min-width: 250px;
    max-width: 400px;
    align-self: flex-start;
  }
}

.container__special-aside {
  margin-top: 20px;
  position: relative;
  display: flex;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h2 {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    line-height: 1.1;
    font-weight: 400;
    letter-spacing: 0.1px;
    color: #000000;
    font-family: Open Sans, sans-serif;
  }

  button {
    position: absolute;
    padding: 1rem 2rem;
    background-color: rgb(255, 255, 255);
    border: 2px solid #fd8664;
    font-size: 1.2rem;
    line-height: 1.1;
    font-weight: 600;
    border-radius: 5px;
    color: #fd8664;
    bottom: 15%;
    left: 30%;

    &:hover {
      background-color: #fd8664;
      color: #fff;
    }
  }
}
</style>
