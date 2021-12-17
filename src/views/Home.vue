<template>
  <div class="background_image">
    <div class="container">
      <div class="input_bg">
        <h1 class="title">NASA Image Search</h1>
        <form @submit.prevent="submitHandler">
          <input
            type="text"
            class="search_input"
            placeholder="e.g Moon"
            v-model="search_value"
          />
          <button type="submit" class="search_submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      search_value: "",
      router: useRouter(),
    };
  },
  methods: {
    submitHandler() {
      this.router.push(`/search/${this.search_value}`);
    },
  },
};
</script>

<style scoped>
.background_image {
  width: 100%;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-position: center;
  background-size: cover;
}

.search_input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  outline: none;
  font-size: large;
}

.title {
  color: white;
  font-size: 2rem;
  font-weight: normal;
  padding-bottom: 25px;
}

.search_submit {
  color: white;
  text-decoration: none;
  border: 1px solid white;
  font-size: large;
  margin-left: 15px;
  padding: 5px 8px;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 0.7; /* Firefox */
}

.input_bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  background-color: rgba(112, 112, 112, 0.295);
  padding: 40px;
  border-radius: 15px;
}
</style>
