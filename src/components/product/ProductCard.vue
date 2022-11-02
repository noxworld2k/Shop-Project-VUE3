<script setup lang="ts">
defineProps<{
  product: {
    product_name: string;
    product_desc: string;
    product_price: number;
    product_photo: string;
    special_offer: boolean;
    special_price: number;
  };
}>();

</script>
<template>
  <div class="product__container">
    <div class="product__image">
      <img :src="product.product_photo" :alt=product.product_name />
    </div>
    <div class="product__info">
      <div class="product__name">{{ product.product_name }}</div>
      <div class="product__description">{{ product.product_desc }}</div>
      <div v-if="product.special_offer" class="product__price-special"><p>
        Promocja
      </p></div>
      <div v-else class="product__price">{{ product.product_price / 100 }} zł</div>
      <div>Cena za kg:  {{product.product_price /100 }} zł</div>
    </div>
</div>
</template>

<style scoped lang="scss">
.product__container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 300px;
  height: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.product__container:hover {
  transform: scale(1.05);
}
.product__image {
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
}
.product__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.product__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.product__name {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.product__price {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.product__description {
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
}
.product__price-special {
 position: absolute;
  top: 0;
  right: 0;
  background: #ee3206;
  color: white;
  width: 80px;
  height: 40px;
  text-align: center;
  line-height: 60px;
  p{
  transform: translateY(-12%);
  }
}
</style>