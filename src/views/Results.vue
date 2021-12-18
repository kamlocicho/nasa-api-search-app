<template>
  <div>
    <Navbar />
    <div class="container">
      <modal @close="closeModal" v-show="isModalVisible">
        <template v-slot:header v-if="currentImage.title">
          {{ currentImage.title }}
        </template>
        <template v-slot:header v-else>This image has no title</template>

        <template v-slot:body> <img :src="imageSrc" alt="" /> </template>

        <template v-slot:footer v-if="currentImage.center">
          Created by - {{ currentImage.center }} Center
        </template>
        <template v-slot:footer v-else> Created by - None </template>
      </modal>

      <div class="grid_container" v-if="images">
        <img
          class="grid_item"
          :v-if="image.links[0]"
          :src="image?.links[0]?.href"
          alt=""
          v-for="image in images"
          :key="image.data.nasa_id"
          @click="openModal(image)"
        />
      </div>
      <div v-else class="loader"></div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "Results",
  data() {
    return {
      images: null,
      isModalVisible: false,
      currentImage: {
        title: "",
        center: "[]",
      },
      imageSrc: "",
    };
  },
  components: {
    Navbar,
    Modal,
  },
  methods: {
    openModal(image) {
      this.currentImage.title = image?.data[0]?.title;
      this.currentImage.center = image?.data[0]?.center;
      this.imageSrc = image?.links[0]?.href;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  async created() {
    const response = await fetch(
      `https://images-api.nasa.gov/search?q=${this.$route.params.search}`
    );
    const data = await response.json();
    const images = [];
    data.collection.items.map((link) => {
      if (link.links && link.data) images.push(link);
    });
    this.images = images;
  },
};
</script>

<style scoped>
.grid_container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
}
.grid_item {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grid_item:hover {
  filter: brightness(50%);
}

.container {
  margin-top: 8rem;
}
</style>