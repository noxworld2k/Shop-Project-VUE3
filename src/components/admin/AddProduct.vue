<template>
  <form class="form__container" @submit.prevent="addProduct">
    <h2>Add Product</h2>
    <label for="name">Product name</label>
    <input
      type="text"
      name="name"
      v-model="product.product_name"
      placeholder="Enter product name"
    />
    <label for="price">Price</label>
    <input
      type="number"
      name="price"
      v-model="product.product_price"
      placeholder="Enter product price"
    />
    <label for="description">Description</label>
    <textarea
      name="description"
      v-model="product.product_desc"
      placeholder="Enter product description"
    />
    <label for="image">Upload a product photo</label>
    <input
      name="image"
      type="file"
      placeholder="image"
      accept="image/png image/jpg"
      @change="changeImage"
    />

    <select v-model="product.category">
      <option
        v-for="category in categoryList"
        :value="category.name"
        :key="category.name"
      >
        {{ category.name }}
      </option>
    </select>
    <button class="btn" type="submit">Add product</button>
  </form>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, watch } from "vue";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "@/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

//Pobieranie kategorii z bazy danych
const categoryList = reactive([]);
onBeforeMount(async () => {
  const querySnapshot = await getDocs(collection(db, "categories"));
  querySnapshot.forEach((doc) => {
    categoryList.push(doc.data());
  });
});

const product = reactive({
  product_name: "",
  product_desc: "",
  product_price: 0,
  category: "",
  product_photo: "",
  date: "",
  imageFile: [],
});
console.log(product);

watch(
  () => product.imageFile,
  (newVal) => {
    uploadImage(newVal);
  }
);
const changeImage = (e: any) => {
  product.imageFile = e.target.files[0];
};

const uploadImage = (file: any) => {
  console.log(file.name);
  console.log(product.imageFile);
  const metadata = {
    contentType: "image/jpeg" || "image/png",
  };
  const date = new Date();

  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = ref(storage, "images/products/" + file.name + date);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress =
        Number(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      switch (error.code) {
        case "storage/unauthorized":
          break;
        case "storage/canceled":
          break;
        case "storage/unknown":
          break;
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log(product.product_photo);
        console.log("File available at", downloadURL);
        return (product.product_photo = downloadURL);
      });
    }
  );
};

const addProduct = async () => {
  const date = new Date();
  product.date = date.toLocaleString();
  const addDocRef = collection(db, "products");
  const Product = {
    product_name: product.product_name,
    product_desc: product.product_desc,
    product_price: product.product_price,
    category: product.category,
    product_photo: product.product_photo,
    date: product.date,
  };

  await addDoc(addDocRef, Product)
    .then(() => {
      console.log("Document successfully written!");
      console.log(product);
      product.product_name = "";
      product.product_desc = "";
      product.product_price = 0;
      product.category = "";
      product.product_photo = "";
      product.date = "";
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style scoped>
.btn {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.form__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
