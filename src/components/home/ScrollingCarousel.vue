<template>
  <div class="relative overflow-hidden lg:mt-20 mt-5">
    <div
      class="flex items-center gap-2 animate-scroll"
      :style="{ '--scroll-speed': scrollSpeed + 's' }"
    >
      <!-- Loop through the images and display them -->
      <div
        v-for="(image, index) in displayedImages"
        :key="index"
        class="flex-shrink-0 w-[240px] lg:w-[initial]"
      >
        <img :src="image" alt="Carousel image" class="rounded-lg w-full" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'ScrollingCarousel',
  props: {
    images: {
      type: Array as () => string[],
      required: true,
    },
    scrollSpeed: {
      type: Number,
      default: 20, // in seconds
    },
  },
  setup(props) {
    const displayedImages = computed(() => [...props.images, ...props.images])

    return {
      displayedImages,
    }
  },
})
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll var(--scroll-speed) linear infinite;
  width: 200%;
}
</style>

<style>
@import 'tailwindcss/tailwind.css';
</style>
