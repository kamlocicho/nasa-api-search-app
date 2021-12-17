<template>
  <router-view v-slot="{ Component }">
    <transition mode="out-in" name="route">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap");

body {
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #ddd;
}

a {
  text-decoration: none;
  color: black;
}

.container {
  width: 100%;
  height: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid rgb(171, 178, 241); /* Blue */
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.route-enter-from {
  transform: translateY(100%);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  transform: translateY(-100%);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
