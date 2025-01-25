<template>
  <section class="flex flex-col items-center mt-8 lg:mt-16">
    <p class="bg-secondary-red font-redHat text-sm rounded-full px-3 py-1 mb-4 lg:mb-7">Events</p>

    <h2 class="text-4xl md:text-5xl mb-14">Trending Events</h2>

    <div class="relative w-full overflow-hidden py-10">
      <!-- Slider Wrapper -->
      <div
        class="flex items-center transition-transform duration-500 ease-in-out"
        :style="sliderStyle"
        ref="slider"
      >
        <!-- Slider Cards -->
        <div
          v-for="(item, index) in items"
          :key="index"
          class="shrink-0 w-full max-w-[309px] xl:max-w-[846px] sm:max-w-[506px] sm:max-h-[457px] max-h-[419px] xl:max-h-[707px] lg:max-h-[607px] lg:max-w-[706px] relative"
          :class="{
            'scale-100 z-10 h-[707px]': index === currentIndex,
            'scale-90 h-[607px]': index !== currentIndex,
          }"
        >
          <div class="relative w-full h-full">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover rounded-[30px]"
            />
            <div class="absolute left-4 right-4 p-4 bg-white text-black rounded-[30px] bottom-4">
              <h3 class="text-lg font-bold">{{ item.title }}</h3>
              <p class="text-sm">{{ item.date }}</p>
              <p class="text-sm">{{ item.location }}</p>
              <p class="text-sm">From {{ item.price }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->

      <button class="text-black px-4 py-2 rounded absolute -bottom-2 left-[12%]" @click="prevSlide">
        PREV <img src="" alt="" />
      </button>
      <button
        class="text-black px-4 py-2 rounded absolute -bottom-2 right-[15%]"
        @click="nextSlide"
      >
        NEXT
      </button>
    </div>
  </section>

  <div class="flex justify-center pb-10 mt-5">
    <button class="bg-primary-red rounded-full text-white h-10 md:h-14 px-9 md:px-16">
      See all events
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

interface Item {
  title: string
  date: string
  location: string
  price: string
  image: string
}

// Mock slider items
const items: Item[] = [
  {
    title: 'Wave Amapiano Party',
    date: 'Wed, Aug 7, 2024, 11:00 PM WAT',
    location: 'Lagos, Nigeria',
    price: 'NGN 10,000.00',
    image: 'images/banner_1.svg',
  },
  {
    title: 'Everything Tymlez',
    date: 'Sat, Aug 22, 2024, 8:00 PM WAT',
    location: 'Lagos, Nigeria',
    price: 'NGN 15,000.00',
    image: 'images/banner_2.svg',
  },
  {
    title: 'Lagos Vibe Party',
    date: 'Fri, Sep 5, 2024, 10:00 PM WAT',
    location: 'Lagos, Nigeria',
    price: 'NGN 5,000.00',
    image: 'images/banner_3.svg',
  },
]

const currentIndex = ref(1)
const screenWidth = ref(window.innerWidth)

const calculateTranslateX = (width: number, index: number) => {
  switch (index) {
    case 0:
      return 3
    case 1:
      return width < 345
        ? -85
        : width < 361
          ? -78
          : width < 376
            ? -73
            : width < 391
              ? -68
              : width < 400
                ? -150
                : width < 415
                  ? -61
                  : width < 431
                    ? -59
                    : width < 541
                      ? -37
                      : width < 769
                        ? -50
                        : width < 821
                          ? -43
                          : width < 854
                            ? -40
                            : width < 913
                              ? -34
                              : width < 1025
                                ? -55
                                : width < 1130
                                  ? -90
                                  : width < 1190
                                    ? -80
                                    : width < 1281
                                      ? -50
                                      : -40
    case 2:
      return width < 345
        ? -175
        : width < 361
          ? -160
          : width < 376
            ? -150
            : width < 391
              ? -140
              : width < 400
                ? -150
                : width < 413
                  ? -128
                  : width < 431
                    ? -119
                    : width < 541
                      ? -77
                      : width < 769
                        ? -100
                        : width < 821
                          ? -88
                          : width < 854
                            ? -80
                            : width < 913
                              ? -70
                              : width < 1025
                                ? -110
                                : width < 1130
                                  ? -90
                                  : width < 1190
                                    ? -80
                                    : width < 1281
                                      ? -115
                                      : -80
    default:
      return 0
  }
}

const sliderStyle = computed(() => {
  const translateX = calculateTranslateX(screenWidth.value, currentIndex.value)
  return {
    transform: `translateX(${translateX}%)`,
  }
})

const prevSlide = () => {
  currentIndex.value = Math.max(0, currentIndex.value - 1)
}

const nextSlide = () => {
  const maxIndex = items.length - 1
  currentIndex.value = Math.min(maxIndex, currentIndex.value + 1)
}

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth
}

// Add and remove event listeners
onMounted(() => {
  window.addEventListener('resize', updateScreenWidth)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenWidth)
})
</script>
