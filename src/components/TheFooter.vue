<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__container">
        <h3 class="footer__container-title">
          O Nas
        </h3>
        <ul>
          <li>
            <a href="#">O nas</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
          <li>
            <a href="#">Regulamin</a>
          </li>
          <li>
            <a href="#">Polityka prywatności</a>
          </li>
        </ul>
      </div>
      <div class="footer__container">
        <h3 class="footer__container-title">
          Informacje
        </h3>
          <ul>
            <li>
              <a href="#">Dostawa</a>
            </li>
            <li>
              <a href="#">Zwroty</a>
            </li>
            <li>
              <a href="#">Płatności</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
      </div>
      <div class="footer__container">
        <h3 class="footer__container-title">
          Dostawa
        </h3>
        <ul>
          <li>
            <a href="#">Polska</a>
          </li>
          <li>
            <a href="#">Europa</a>
          </li>
          <li>
            <a href="#">Świat</a>
          </li>

        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts" >

</script>

<style scoped lang="scss">
.footer {
  background-color: #2d2c2c;
  color: #fff;
}
.footer__container {
  margin-top: 3rem;
  margin-bottom: 5rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  justify-items: flex-start;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin-bottom: 1rem;
      a {
        color: #fff;
        text-decoration: none;
        font-size: 1.2rem;
        &:hover {
          color: #f5a623;
        }
      }
    }
  }
}
.footer__container-title {
  font-size: 1.2rem;
  text-transform: uppercase;
  font-family: Oswald, sans-serif;
  margin-bottom: 1rem;
  color: #f5a623;
}
</style>