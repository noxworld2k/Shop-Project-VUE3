<template>
<header class="header">
  <div class="container">
    <div>
      <img class="logo" src="@/assets/img/logo.png" alt="This Shop Logo" />
    </div>
    <div>
      <TheNav />
    </div>
    <div>
      <p class="header__text-cart">Koszyk</p>
    </div>
  </div>
</header>
</template>

<script setup lang="ts">
import TheNav from "@/components/TheNav.vue";
</script>

<style scoped>
.header {
  padding: 1rem;
}
.logo {
  width: 126px;
}
.header__text-cart{
  font-size: 1.5rem;
  font-weight: 700;
  Color: #fd8664;
}
</style>