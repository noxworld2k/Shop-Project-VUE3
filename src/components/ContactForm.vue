<template>
  <section class="contact">
    <div class="container contact__section">
      <div class="contact__box">
        <h2>Skontaktuj się z nami!</h2>
        <form class="contact__box-form" @submit.prevent="handleSubmit">
          <div class="contact__box-input">
            <label for="name">Imię</label>
            <input type="text" name="name" v-model="formData.name"/>
          </div>
          <div class="contact__box-input">
            <label for="email">Email</label>
            <input type="email" v-model="formData.email" name="email"/>
          </div>
          <div class="contact__box-input">
            <label for="message">Treść</label>
            <textarea v-model="formData.message" name="message"></textarea>
          </div>
          <button class="btn" type="submit" >Wyślij</button>
        </form>
      </div>
      <div class="contact__box">
        <div class="contact__box-desc">
          <div class="contact__box-img">
            <img src="@/assets/img/icons/pin.png" alt="Pinezka jak na mapie">
          </div>
          <div>
            <h2>Nasza Lokalizacja</h2>
            <p>ul. Kolejowa 1</p>
          </div>

        </div>
        <div class="contact__box-desc">
          <div class="contact__box-img">
            <img src="@/assets/img/icons/tel.png" alt="Ikona przedstawiająca telefon">
          </div>
          <div>
            <h2>MASZ PYTANIA? ZADZWOŃ</h2>
            <p>+ 912 3 567 8987</p>
            <p> + 912 5 252 3336</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {reactive} from "vue";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const formData = reactive<FormData>({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = (e: Event) => {
  e.preventDefault()
  console.log(formData)
}

</script>

<style scoped lang="scss">
.btn {
  background-color: #2891f4;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: calc(100% - 100px);
  text-align: center;
  margin-left: 100px;
  &:hover {
    background-color: #2891f4;
    color: #fff;
    transform: scale(1.1);
  }
}
.contact {
  background-color: #f2f2f2;
  padding: 4rem 0;
}

.contact__box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 700;
  }
}

.contact__box-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  width: 400px;
}

.contact__box-input {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;

  label {
    font-size: 1.2rem;
    text-transform: uppercase;
    margin: 15px ;
  }
  input {
    width: 300px;
    height: 2rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
    background: white;
  }

  textarea {
    width: 300px;
    height: 5rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
    background: white;
  }
}

.contact__box-desc {
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  h2{
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1rem;
    margin-bottom: 0.4rem;
  }
}
.contact__box-img {
  margin-right: 15px;
  margin-bottom: 1.2rem;
  img {
    background: #2891f4;
    padding: 15px;
    width: 50px;
    height: 50px;
  }
}
.contact__section {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

}

</style>