<template>
  <nav class="navbar">
    <div class="navbar_item"><router-link to="/">NASA Search</router-link></div>
    <div class="navbar_item">World</div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  border-bottom: 1px solid rgb(171, 178, 241);
  background-color: #ddd;
  z-index: 100;
}

.navbar_item {
  margin: 15px;
}
</style>