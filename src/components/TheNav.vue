<script setup lang="ts">
import { pages } from '@/data/pages.json'
const pageList: object[] = pages;

</script>

<template>
  <ul class="nav__list">
    <li class="nav__list-item" v-for="page in pageList">
      <RouterLink :to=page.url :title=page.title>
        {{page.title}}
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.nav__list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav__list-item {
  margin: 0 1rem;
  a {
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px 14px;
    &:hover {
      color: #ffffff;
      background: #fd8664;
    }
  }
}

</style>