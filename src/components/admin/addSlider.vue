/* eslint-disable */
<template>
  <div class="full-width">
    <div class="container">
      <h1>Add Slide</h1>
      <form class="add__toDatabase">
        <label for="name">Slide name</label>
        <input
          type="text"
          class="add__toDatabase-input"
          placeholder="Title"
          v-model="slide.title"
        />
        <label for="desc">Slide description</label>
        <textarea
          class="add__toDatabase-input"
          placeholder="Description"
          v-model="slide.desc"
        />
        <label for="image">Upload an Image</label>
        <input
          name="image"
          type="file"
          placeholder="image"
          accept="image/png image/jpg"
          @change="changeImage"
        />
        <button class="add__toDatabase-button" @click.prevent="addSlide">
          Add Slide
        </button>
      </form>
    </div>
    <div v-if="success.value" class="add_toDatabse-success">
      {{ success }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { db, storage } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { reactive, watch, ref as refer } from "vue";

const success = refer("");
const slide = reactive({
  title: "",
  desc: "",
  imageUrl: "",
  imageFile: [],
});
watch(
  () => slide.imageFile,
  (newVal) => {
    uploadImage(newVal);
  }
);
const changeImage = (e: any) => {
  slide.imageFile = e.target.files[0];
};

const uploadImage = (file: any) => {
  console.log(file.name);
  console.log(slide.imageFile);
  const metadata = {
    contentType: "image/jpeg" || "image/png",
  };

  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = ref(storage, "images/sliders/" + file.name);
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
        console.log(slide.imageUrl);
        console.log("File available at", downloadURL);
        return (slide.imageUrl = downloadURL);
      });
    }
  );
};

const addSlide = async () => {
  const addDocRef = collection(db, "sliders");
  const Slide = {
    name: slide.title,
    desc: slide.desc,
    imageUrl: slide.imageUrl,
  };
  console.log(Slide);

  await addDoc(addDocRef, Slide)
    .then(() => {
      console.log("Document successfully written!");
      success.value = "Slide added successfully";
    })
    .then(() => {
      slide.title = "";
      slide.desc = "";
      slide.imageUrl = "";
      slide.imageFile = [];
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  padding: 0 20px;
  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  .add__toDatabase {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    .add__toDatabase-input {
      width: 100%;
      padding: 10px;
      margin: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      outline: none;
    }
  }
  .add__toDatabase-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 20px;
  }
  .add__toDatabase-title {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  .add_toDatabse-success {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    background-color: #ccc;
    cursor: pointer;
  }
}
.add__toDatabase-button {
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  color: #fff;
  background-color: #08a88c;
  cursor: pointer;
  &:hover {
    background-color: #0adeb8;
  }
}
</style>
