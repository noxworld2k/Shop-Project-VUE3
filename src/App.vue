<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>
<style lang="scss">
* {
  font-family: Oswald, sans-serif;
}
h1 {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 3.3rem;
  line-height: 1.1;
  font-family: Oswald, sans-serif
}
h2 {
  font-size: 1.5rem;
  text-transform: uppercase;
  font-family: Oswald, sans-serif
}
h3 {
  font-size: 1.2rem;
  font-family: Oswald, sans-serif
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
</style>